import React from 'react';
import styled from 'styled-components';
import DataView from './DataView';

const Label = ({ value, variant = 'invert', color, fsize = 'smt', ...props }) => {
  value = /[a-z]/.test(value) ? 'tk_' + value : value;
  return (
    <Wrapper {...props} color={color}>
      <DataView variant={variant} fsize={fsize}>
        {value}
      </DataView>
    </Wrapper>
  );
};

const Wrapper = styled(DataView)`
  background-color: ${props => props.color || 'var(--tag-color)'};
  color: var(--invert-color);
  padding: 0.2em 0.4em;
  line-height: ${props => (props.fsize ? props.fsize : 'inherit')};
  border-radius: 0.15rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export default Label;
