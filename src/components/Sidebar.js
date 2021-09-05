import { h } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';
import { DataView, FlexColumn, Icons, Logo } from 'tz-base';
import { space } from 'styled-system';

const SideBar = () => (
	<Wrapper as="nav">
		<LogoWrapper to="/">
			<Logo width="4em" height="3em" />
		</LogoWrapper>
		<SidebarCard>
			<DataView variant="dark-label" fsize="sm">
				{'test'}
			</DataView>
		</SidebarCard>

		<SettingsWrapper to={'/settings'}>
			<Icons display="block" variant="inherit" mx="auto" mb="0.5em" type="settings" fsize="slg" />
			<DataView variant="inherit" className="menu-text" fsize="sm">
				tk_settings
			</DataView>
		</SettingsWrapper>
	</Wrapper>
);

const SidebarCard = ({ children, to, ...props }) =>
	to ? (
		<Link to={to}>
			<Card {...props}>{children}</Card>
		</Link>
	) : (
		<Card {...props}>{children}</Card>
	);

const Card = styled.div`
	${space}
	padding-right: 0.5em;
	padding-left: 0.5em;
	padding-top: 0;
	padding-bottom: 1.5em;
	width: 100%;
	color: var(--dark-label-color);
	text-align: center;

	&:hover {
		color: var(--dark-link-color);
	}
`;

const Wrapper = styled(FlexColumn)`
	height: 100vh;
	max-height: 100vh;
	overflow-y: auto;
	width: 6em;
	position: fixed;
	z-index: 30;
	box-shadow: 0 5em 5px 2px var(--shadow-color);
	justify-content: flex-start;
	background-color: var(--dark-nav-bg);
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const LogoWrapper = styled(Link)`
	margin: 1em auto 0;
	color: var(--dark-label-color);
	&:hover {
		color: var(--white);
	}
`;

const SettingsWrapper = styled(Link)`
  position: relative:
  padding: 0.5em;
  margin-bottom: 1em;
  text-align: center;
  color: var(--dark-label-color);
  &:hover {
    color: var(--link-color);
  }
`;

export default SideBar;
