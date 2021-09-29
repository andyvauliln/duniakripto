import { h } from 'preact';
import styled from 'styled-components';

import { Box, FlexRowSpaceBetween } from './flexBoxes';
import ToggleButton from './toggleButton';
import TextView from './textView';
import { useGlobal } from 'reactn';
import Logo from './logo2';
import { Link } from 'preact-router/match';
//ToDo add Links to social media

export default function Header() {
	return (
		<HeaderWrapper>
			<Logo />
			<Navigation>
				<Link activeClassName="link-active" href="/">
					<TextView fweight="900" fsize="lgt" color="inherit">
						tk_home
					</TextView>
				</Link>
				<Link activeClassName="link-active" href="/news">
					<TextView fweight="900" fsize="lgt" color="inherit">
						News
					</TextView>
				</Link>
				<Link activeClassName="link-active" fweight="500" fsize="lgt" href="/ekslusif">
					<TextView fweight="900" fsize="lgt" color="inherit">
						Eksklusif
					</TextView>
				</Link>
				<Link activeClassName="link-active" fweight="500" fsize="lgt" href="/education">
					<TextView fweight="900" fsize="lgt" color="inherit">
						Education
					</TextView>
				</Link>
				<Link activeClassName="link-active" fweight="500" fsize="lgt" href="/specprojects">
					<TextView fweight="900" fsize="lgt" color="inherit">
						Spec Projects
					</TextView>
				</Link>
				<Link activeClassName="link-active" fweight="500" fsize="lgt" href="/events">
					<TextView fweight="900" fsize="lgt" color="inherit">
						Events
					</TextView>
				</Link>
				<Link activeClassName="link-active" fweight="500" fsize="lgt" href="/marketdata">
					<TextView fweight="900" fsize="lgt" color="inherit">
						Market
					</TextView>
				</Link>
			</Navigation>
			<LanguageSwitcher />
		</HeaderWrapper>
	);
}

const LanguageSwitcher = () => {
	const [lang, setLeng] = useGlobal('lang');

	return (
		<LanguageWrapper
			ml="2em"
			onClick={e => {
				lang === 'eng' ? setLeng('ind') : setLeng('eng');
				e.stopPropagation();
				e.preventDefault();
				return false;
			}}
			width="7em"
		>
			<TextView>Eng</TextView>
			<ToggleButton both={true} checked={lang !== 'eng'} />
			<TextView>Ind</TextView>
		</LanguageWrapper>
	);
};

const LanguageWrapper = styled(FlexRowSpaceBetween)``;

const HeaderWrapper = styled.header`
	background: var(--nav-bg);
	border-bottom: 1px solid var(--divider-color);
	position: sticky;
	height: 4em;
	top: 0;
	z-index: 1001;

	display: flex;
	flex-direction: row;
	text-transform: uppercase;
	justify-content: space-between;
	align-items: center;
	padding: 0 2.3em;
	@media (max-width: 800px) {
		flex-direction: column;
		height: 10em;
		padding: 1em;
	}
`;

const Navigation = styled(Box)`
	opacity: 0.8;
	justify-content: center;
	> *:hover {
		color: var(--link-color);
	}
	> *:not(:last-child) {
		margin-right: 1em;
	}
`;
