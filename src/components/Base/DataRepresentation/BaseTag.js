import React from 'react';
import styled from 'styled-components';
import DataView from './DataView';

const BaseTag = ({ name, variant, color, fsize, ...props }) => {
  name = /[a-z]/.test(name) ? 'tk_' + name : name;
  return (
    <Wrapper {...props} fsize={fsize} color={color}>
      <DataView variant="inherit" color="#FFF" fweight="600" fsize={fsize}>
        {name}
      </DataView>
    </Wrapper>
  );
};
const Wrapper = styled(DataView)`
  background-color: ${props => props.color};
  padding: ${props => (props.p ? props.p : '0.4em 0.8em')};
  line-height: ${props => (props.fsize ? props.fsize : 'inherit')};
  border-radius: 0.3em;
  text-align: center;
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'unset')};
  text-align: center;
  width: fit-content;
  height: fit-content;
`;

export default BaseTag;
