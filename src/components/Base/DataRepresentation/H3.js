import { FlexRowSpaceBetween } from '../Layout/FlexBoxes';
import TranslateView from './TranslateView';
import { h } from 'preact';
import styled from 'styled-components';

export default ({ k, badge, children, ...props }) => {
	k = k || '';
	const key = k.startsWith('tk_') ? k : 'tk_' + k;
	return children ? (
		<FlexRowSpaceBetween py=".5em" width="100%">
			<TranslateView fsize="lg" fweight="500" variant="headline" as="h3" {...props}>
				{key}
			</TranslateView>
			{badge}
			<Stretch />
			{children}
		</FlexRowSpaceBetween>
	) : (
		<TranslateView py=".5em" fsize="lg" fweight="500" variant="headline" as="h3" {...props}>
			{key}
		</TranslateView>
	);
};

const Stretch = styled.span`
	display: flex;
	flex-grow: 1;
	min-width: 0.5em;
`;
