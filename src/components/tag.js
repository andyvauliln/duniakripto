import { h } from 'preact';
import styled from 'styled-components';
import { Box } from './flexBoxes';
import TextView from './textView';

const Tag = ({ name, tprops = {}, ...props }) => (
	<Wrapper {...tprops}>
		<TextView fweight="300" {...props}>
			{name}
		</TextView>
	</Wrapper>
);
const Wrapper = styled(Box)`
	background-color: ${props => (props.bg ? props.bg : 'none')};
	padding: ${props => (props.p ? props.p : '.2em .5em')};
	line-height: ${props => (props.fsize ? props.fsize : 'inherit')};
	border-radius: ${props => (props.br ? props.br : '5px')};
	text-align: center;
	align-self: ${props => (props.alignSelf ? props.alignSelf : 'unset')};
	width: fit-content;
	border: 1px solid var(--divider-color);
	height: fit-content;
	min-width: 2em;
`;

export default Tag;
