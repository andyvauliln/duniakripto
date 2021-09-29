import { h } from 'preact';
import styled from 'styled-components';
import { space, size } from 'styled-system';

const Divider = ({ ...props }) => <Wrapper {...props}>&nbsp;</Wrapper>;

const Wrapper = styled.div`
  ${size}
  ${space}
  width: ${props => props.width || '100%'};
  height: 1px;
  background: var(--divider-color);
`;

export default Divider;
