import React from 'reactn';
import styled from 'styled-components';
import DataView from './DataView';
import { isString, isDate, isNumber } from 'tz-utils';

const DataBox = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      {isString(children) || isNumber(children) || isDate(children) ? (
        <DataView block {...props}>
          {children}
        </DataView>
      ) : (
        children
      )}
      {isString(title) ? (
        <DataView variant="label" fsize="smt">
          {title}
        </DataView>
      ) : (
        title
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  white-space: nowrap;
  padding: 0.5em;
  text-align: ${props => (props.align ? props.align : 'right')};
`;
export default DataBox;
