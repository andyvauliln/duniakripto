import { h } from 'preact';
import styled from 'styled-components';
import { Box, FlexRow, FlexRowWrap } from 'tz-base';
import { sizes } from 'tz-config';
import Searchbar from './Searchbar';

const Header = () => (
	<Wrapper as="header" py="1em">
		<Box flex="5">
			<Searchbar />
		</Box>
		<Navigation>
			<a href="https://tzstats.com/docs/api" target="_blank" rel="noopener noreferrer">
				API
			</a>
			<a href="https://tzstats.com/blog" target="_blank" rel="noopener noreferrer">
				Blog
			</a>
		</Navigation>
	</Wrapper>
);

const Wrapper = styled(FlexRowWrap)`
	padding-right: 1em;
	padding-left: 8em;
	background: var(--base-bg);
	min-width: ${sizes.mobileS};
	width: 100%;
	position: sticky;
	z-index: 25;
	top: 0;
	box-shadow: 0 0 5px 2px var(--shadow-color);
`;

const Navigation = styled(FlexRow)`
	flex: 1;
	& > * {
		margin-left: 2em;
		margin-top: auto;
		margin-bottom: auto;
	}
	justify-content: flex-end;
`;
export default Header;
