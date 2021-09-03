import { map } from 'lodash-es';
import React from 'react';
import { Accordion, DataView, FlexRow, FlexRowSpaceBetween } from 'tz-base';
import { isArray, isLambda, isObject, isValue } from 'tz-utils';

const ContractDataTypeView = ({ data, isShowDivider = false, py = 0 }) => {
  return map(data, (value, keyOrIndex) => {
    const key = parseContractField(keyOrIndex);
    if (typeof keyOrIndex === 'string' && isValue(value) && (keyOrIndex + value).length > 35) {
      return (
        <Accordion
          py={py}
          key={keyOrIndex}
          isShowDivider={isShowDivider}
          indicator={true}
          list={[
            {
              title: { name: key },
              content: (
                <FlexRow>
                  <DataView ellipsis>{JSON.stringify(value).replace(/"/g, '')}</DataView>
                </FlexRow>
              ),
            },
          ]}
        />
      );
    }

    if (isObject(value) && value.type) {
      return (
        <Accordion
          py={py}
          key={keyOrIndex}
          isShowDivider={true}
          indicator={true}
          list={[
            {
              title: { name: `${value.call}` },
              content: <ContractDataTypeView data={value.type} />,
            },
          ]}
        />
      );
    }
    if (typeof keyOrIndex === 'string' && keyOrIndex.indexOf('@list') >= 0) {
      return (
        <FlexRowSpaceBetween py={py} key={keyOrIndex}>
          <DataView variant="outline">{keyOrIndex.split('@').slice(0, 2).join(' ')}</DataView>
          <DataView ellipsis>{`list<${value[0]}>`}</DataView>
        </FlexRowSpaceBetween>
      );
    }
    if (isObject(value)) {
      return (
        <Accordion
          py={py}
          key={keyOrIndex}
          isShowDivider={isShowDivider}
          indicator={true}
          list={[
            {
              title: { name: `${key} (object)` },
              content: <ContractDataTypeView data={value} />,
            },
          ]}
        />
      );
    }
    if (isLambda(value, keyOrIndex)) {
      return (
        <Accordion
          key={keyOrIndex}
          py={py}
          isShowDivider={isShowDivider}
          indicator={true}
          list={[
            {
              title: { name: `${key}  (Lamda)` },
              content: <ContractDataTypeView data={value} />,
            },
          ]}
        />
      );
    }
    if (isValue(value)) {
      return (
        <FlexRowSpaceBetween py={py} key={keyOrIndex}>
          <DataView mr="0.5em" variant="outline">
            {key}
          </DataView>
          <DataView ellipsis>{JSON.stringify(value).replace(/"/g, '')}</DataView>
        </FlexRowSpaceBetween>
      );
    }
    if (isArray(value)) {
      return (
        <Accordion
          py={py}
          key={keyOrIndex}
          isShowDivider={isShowDivider}
          indicator={true}
          list={[
            {
              title: { name: `${key}  (array)` },
              content: <ContractDataTypeView data={value} />,
            },
          ]}
        />
      );
    }
  });
};

function parseContractField(value) {
  if (typeof value === 'string') {
    let arr = value.split('@');
    if (arr.length > 1) {
      return `${arr[0]} ${arr[2] ? `[${arr[2].replace('option', 'op')}]` : ''} ${arr[1]} `;
    } else {
      return value;
    }
  }
  return value;
}

export default ContractDataTypeView;
