import React from 'react';
import styled from 'styled-components';
import { getDateFormat, getShortHash, getHashOrBakerName, isArray, isDefined } from 'tz-utils';
import { CopyButton } from '../Buttons-Links';
import { FlexColumnSpaceBetween, FlexRowSpaceBetween } from '../Layout/FlexBoxes';
import Icons from '../Svg/Icons';
import DataView from './DataView';
import DividedData from './DividedData';
import MoneyWrapper from './MoneyWrapper';
import TranslateView from './TranslateView';

export const LabelValueBox = ({ k, v, kp = { variant: 'label' }, i18k, variant, ...props }) => {
  kp.variant = kp.variant || 'label';
  return (
    <Wrapper>
      {k && (
        <TranslateView flex="1 2 auto" {...kp} i18d={i18k} mr=".5em" className={kp.variant}>
          {k}
        </TranslateView>
      )}
      {props.copy || props.extern ? (
        <ValueWrapper>
          <DataView {...props} className={variant} variant={variant}>
            {v}
          </DataView>
          {props.extern && <Icons type="link" variant={variant} fsize="sm" ml=".25em" />}
          {props.copy && <CopyButton ml=".5em" value={props.copy} />}
        </ValueWrapper>
      ) : (
        <DataView flex="0 1 auto" {...props} textAlign="right" className={variant} variant={variant}>
          {isArray(v)
            ? v.map((val, i) => {
                return (
                  <ListArg key={i}>
                    <DataView {...props} className={variant} variant={variant}>
                      {val}
                    </DataView>
                  </ListArg>
                );
              })
            : v}
        </DataView>
      )}
    </Wrapper>
  );
};

export const H3 = ({ k, badge, children, ...props }) => {
  k = k || '';
  const key = k.startsWith('tk_') ? k : 'tk_' + k;
  return children ? (
    <FlexRowSpaceBetween py=".5em" width="100%">
      <TranslateView fsize="lg" fweight="500" variant="headline" as="h3" {...props}>
        {key}
      </TranslateView>
      {badge}
      <Stretch />
      {children}
    </FlexRowSpaceBetween>
  ) : (
    <TranslateView py=".5em" fsize="lg" fweight="500" variant="headline" as="h3" {...props}>
      {key}
    </TranslateView>
  );
};

// Single-Value render types

export const AddressView = ({ v, to, size = 12, short, ...props }) => {
  to = to || ['', v];
  let target = isArray(to) ? to.join('/') : to;
  const name = short ? getShortHash(v, size) : getHashOrBakerName(v, size);
  return (
    <>
      <DataView variant={v && target ? 'link' : ''} to={target} {...props}>
        {name}
      </DataView>
      {props.copy && <CopyButton ml=".5em" value={props.copy} />}
    </>
  );
};

export const LinkView = ({ v, to, ...props }) => {
  let target = isArray(to) ? to.join('/') : to;
  target = target || v;
  v = isDefined(v) ? v : '-';
  return (
    <DataView variant={v && target ? 'link' : ''} to={target} {...props}>
      {v}
    </DataView>
  );
};

export const DateView = ({ v, dformat = 'll', ...props }) => {
  v = new Date(v);
  return (
    <DataView dformat={dformat} {...props}>
      {v}
    </DataView>
  );
};

export const DateTimeView = ({ v, dformat = 'll HH:mm', short, ...props }) => {
  v = new Date(v);
  if (short) {
    dformat = getDateFormat(v);
  }
  return (
    <DataView dformat={dformat} {...props}>
      {v}
    </DataView>
  );
};

export const DurationView = ({ v, dformat = 'intr', ...props }) => {
  return (
    <DataView dformat={dformat} {...props}>
      {v}
    </DataView>
  );
};

export const NumberView = ({ v, dformat = ',.', max, zero, ...props }) => {
  v = !max || v < max ? v : max + '+';
  v = zero && v === 0 ? zero : v;
  return (
    <DataView dformat={dformat} {...props}>
      {v}
    </DataView>
  );
};

export const PercentView = ({ v, dformat = ',. %', ...props }) => {
  return (
    <DataView dformat={dformat} dim {...props}>
      {v}
    </DataView>
  );
};

export const RatioView = ({ v, ...props }) => {
  return <DividedData data={v} {...props} />;
};

// Label-Value render types
export const TextLV = ({ k, v, ...props }) => {
  const [key, value] = wrapData(k, v);
  return <LabelValueBox k={key} v={value} {...props} />;
};

export const NumberLV = ({ k, v = 0, dformat = ',.', max, zero, ...props }) => {
  let [key, value] = wrapData(k, v);
  value = !max || value < max ? value : max + '+';
  value = zero && value === 0 ? zero : value;
  return <LabelValueBox k={key} v={value} dformat={dformat} {...props} />;
};

export const PercentLV = ({ k, v, dformat = ',. %', ...props }) => {
  const [key, value] = wrapData(k, v);
  return <LabelValueBox k={key} v={value} dim dformat={dformat} {...props} />;
};

function convertCurrency(value, curr) {
  const price = curr.fiat ? curr.fiat.price : 1;
  return isArray(value)
    ? value.map(d => {
        return d * price;
      })
    : price * value;
}

export const MoneyLV = ({ k, v, dformat = '0,0[.]000000', zero, ...props }) => {
  let [key, value] = wrapData(k, v);
  value = Math.abs(value) < 0.000000001 ? 0 : value;
  return (
    <MoneyWrapper>
      {curr => {
        let cv = convertCurrency(value, curr);
        cv = zero && (cv === 0 || isNaN(cv)) ? zero : cv;
        value = zero && (value === 0 || isNaN(value)) ? zero : value;
        return curr.isMarket ? (
          <LabelValueBox k={key} v={curr.isBase ? value : cv} dformat={`${curr.isBase ? curr.base.symbol : curr.fiat.symbol} ${dformat}`} dim {...props} />
        ) : (
          <LabelValueBox k={key} v={value} dformat={`${curr.base.symbol} ${dformat}`} dim {...props} />
        );
      }}
    </MoneyWrapper>
  );
};

export const MoneyView = ({ v = 0, variant = 'inherit', dformat = '0,0[.]000000', zero, ...props }) => {
  v = Math.abs(v) < 0.000000001 ? 0 : v;
  return (
    <MoneyWrapper>
      {curr => {
        let cv = convertCurrency(v, curr);
        cv = zero && (cv === 0 || isNaN(cv)) ? zero : cv;
        v = zero && (v === 0 || isNaN(v)) ? zero : v;
        return curr.isMarket ? (
          <DataView variant={variant} dformat={`${curr.isBase ? curr.base.symbol : curr.fiat.symbol} ${dformat}`} dim {...props}>
            {curr.isBase ? v : cv}
          </DataView>
        ) : (
          <DataView variant={variant} dformat={`${curr.base.symbol} ${dformat}`} dim {...props}>
            {v}
          </DataView>
        );
      }}
    </MoneyWrapper>
  );
};

export const DateLV = ({ k, v, dformat = 'll', ...props }) => {
  const [key, value] = wrapData(k || 'date', v, toDate);
  return <LabelValueBox k={key} v={value} dformat={dformat} {...props} />;
};

export const DateTimeLV = ({ k, v, dformat = 'll HH:mm', short, ...props }) => {
  const [key, value] = wrapData(k || 'date_and_time', v, toDate);
  if (short) {
    dformat = getDateFormat(value);
  }
  return <LabelValueBox k={key} v={value} dformat={dformat} {...props} />;
};

export const DurationLV = ({ k, v, dformat = 'intr', ...props }) => {
  const [key, value] = wrapData(k, v);
  return <LabelValueBox k={key} v={value} dformat={dformat} {...props} />;
};

export const LinkLV = ({ k, v, to, ...props }) => {
  const [key, value] = wrapData(k, v);
  let target = isArray(to) ? to.join('/') : to;
  return <LabelValueBox k={key} variant={isDefined(value) && target ? 'link' : ''} v={value} to={target} {...props} />;
};

export const AddressLV = ({ k, v, to, size = 12, short, ...props }) => {
  to = to || ['', v];
  let target = isArray(to) ? to.join('/') : to;
  const [key, value] = wrapData(k, v, short ? getShortHash : bakerName, size);
  return <LabelValueBox k={key} variant={isDefined(value) && target ? 'link' : ''} v={value} to={target} {...props} />;
};

export const RatioLV = ({ children, k, v, kp = { variant: 'label' }, ...props }) => {
  const [key, value] = wrapData(k, v);
  return children ? (
    <Wrapper>
      <WrapperColumn>
        <WrapperRow>
          <TranslateView {...kp}>{key}</TranslateView>
          <DividedData data={value} {...props} />
        </WrapperRow>
        {children}
      </WrapperColumn>
    </Wrapper>
  ) : (
    <Wrapper>
      <TranslateView {...kp}>{key}</TranslateView>
      <DividedData data={value} {...props} />
    </Wrapper>
  );
};

// conversion functions
const identity = v => v;
const toDate = v => (v instanceof Date ? v : new Date(v));
const bakerName = (v, size = 12) => getHashOrBakerName(v, size);

function wrapData(k, v, convert = identity, size = 12) {
  k = isDefined(k) ? k : '';
  const key = k.startsWith('tk_') ? k : 'tk_' + k;
  if (!isDefined(v)) {
    return [key, '<undefined>'];
  }
  let value = v[k.startsWith('tk_') ? k.slice(3) : k];
  value = isDefined(value) ? value : v;
  return [key, convert(value, size)];
}

const WrapperColumn = styled(FlexColumnSpaceBetween)`
  width: 100%;
`;

const WrapperRow = styled(FlexRowSpaceBetween)`
  width: 100%;
`;

const Wrapper = styled(FlexRowSpaceBetween)`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid var(--divider-color);
  &:last-child {
    border-bottom: none;
  }
`;

const ListArg = styled.span`
  &:not(:last-child):after {
    content: ',';
    padding-right: 0.4em;
  }
`;

const ValueWrapper = styled.span`
  flex: 1 0 auto;
  text-align: right;
`;

const Stretch = styled.span`
  display: flex;
  flex-grow: 1;
  min-width: 0.5em;
`;
