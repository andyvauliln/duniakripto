import { h } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import NotFoundPage from '../routes/Notfound';
import ErrorBoundary from './ErrorBoundary';
import GlobalStyles from './GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from 'tz-hooks';
import Layout from './Layout';

// Code-splitting is automated for routes
import Home from '../routes/HomePage';
const App = () => {
	const handleRoute = e => {
		this.currentUrl = e.url;
	};
	const theme = useTheme();

	return (
		<Provider>
			<div id="app">
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<ErrorBoundary mt="1em">
						<Layout>
							<Router onChange={e => handleRoute}>
								<Home path="/" />
								<NotFoundPage type="404" default />
							</Router>
						</Layout>
					</ErrorBoundary>
				</ThemeProvider>
			</div>
		</Provider>
	);
};

export default App;
const Test = styled.div`
	background: red;
`;
