import React from 'react';
import styled from 'styled-components';
import { Box } from '../Layout/FlexBoxes';
import DataView from './DataView';

const Tag = ({ name, tprops = {}, ...props }) => {
  name = /[a-z]/.test(name) ? 'tk_' + name : name;
  return (
    <Wrapper {...tprops}>
      <DataView fweight="600" {...props}>
        {name}
      </DataView>
    </Wrapper>
  );
};
const Wrapper = styled(Box)`
  background-color: ${props => props.bg};
  padding: ${props => (props.p ? props.p : '.2em .5em')};
  line-height: ${props => (props.fsize ? props.fsize : 'inherit')};
  border-radius: ${props => (props.br ? props.br : '1em')};
  text-align: center;
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'unset')};
  width: fit-content;
  height: fit-content;
  min-width: 2em;
`;

export default Tag;
