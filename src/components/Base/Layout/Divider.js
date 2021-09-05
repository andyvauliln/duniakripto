import { h } from 'preact';
import styled from 'styled-components';
import { space } from 'styled-system';

const Divider = ({ ...props }) => <Wrapper {...props}>&nbsp;</Wrapper>;

const Wrapper = styled.div`
  ${space}
  width: ${props => props.width || '100%'};
  height: 1px;
  background: var(--divider-color);
`;

export default Divider;
