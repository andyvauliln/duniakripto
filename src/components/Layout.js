import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header/Header.js';
import Sidebar from 'components/Layout/Sidebar/Sidebar';
import { ErrorBoundary } from 'Errors';
import React from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from 'tz-base';
import { sizes } from 'tz-config';

const Layout = ({ children }) => (
	<FlexRow>
		<Sidebar />
		<FlexColumn flex="3">
			<Header />
			<MainContent>
				<ErrorBoundary mt="1em">{children}</ErrorBoundary>
			</MainContent>
			<Footer />
		</FlexColumn>
	</FlexRow>
);
export default Layout;

const MainContent = styled.main`
	flex: 3;
	padding-right: 1.5em;
	margin-left: 7.5em;
	padding-top: 0;
	padding-bottom: 2em;
	min-width: ${sizes.mobileS};
	min-height: calc(100vh - 6em);
`;
