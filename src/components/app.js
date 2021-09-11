import { h } from 'preact';
import { useLayoutEffect } from 'preact/hooks';
import { Suspense } from 'preact/compat';
import { Router } from 'preact-router';
import NotFoundPage from '../routes/Notfound';
import ErrorBoundary from './ErrorBoundary';
import GlobalStyles from './GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from 'tz-hooks';
import Layout from './Layout';
import 'tz-services/localization/localization';

// Code-splitting is automated for routes
import Home from '../routes/HomePage';
document.documentElement.classList.remove('no-js');
const App = () => {
	const theme = useTheme();
	useLayoutEffect(() => {
		console.log('aaa');
		document.documentElement.classList.remove('boot');
		const tag = document.querySelector('section[class="boot-screen"]');
		if (tag) {
			tag.parentNode.removeChild(tag);
		}
	}, []);

	return (
		<Suspense fallback={null}>
			<div id="app">
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<ErrorBoundary mt="1em">
						<Layout>
							<Router>
								<Home path="/" />
								<NotFoundPage type="404" default />
							</Router>
						</Layout>
					</ErrorBoundary>
				</ThemeProvider>
			</div>
		</Suspense>
	);
};

export default App;

const Test = styled.div`
	background: red;
`;
