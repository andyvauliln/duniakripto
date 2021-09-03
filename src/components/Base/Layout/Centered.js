import React from 'react';
import styled from 'styled-components';
import { color, height, space, width } from 'styled-system';

const Centered = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  min-height: ${props => (props.minHeight ? props.minHeight + 'px' : '100%')};
  border-top-color: ${props => (props.bt ? 'var(--divider-color)' : 'transparent')};
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default Centered;
