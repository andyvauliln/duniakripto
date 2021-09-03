import React from 'react';
import styled from 'styled-components';
import { DataView } from 'tz-base';
import { isString } from 'tz-utils';

const ChartWrapper = ({ children, title = '', minHeight = 150 }) => {
  return (
    <Wrapper minHeight={minHeight}>
      {children}
      <Overlay>
        {isString(title) ? (
          <DataView fsize="sm" variant="secondary">
            {title}
          </DataView>
        ) : (
          title
        )}
      </Overlay>
    </Wrapper>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 8;
`;

const Wrapper = styled.div`
  position: relative;
  padding-top: 1em;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 0 0 0.25rem 0.25rem;
  overflow: hidden;
  flex-direction: column;
  min-height: ${props => props.minHeight}px;
`;

export default ChartWrapper;
