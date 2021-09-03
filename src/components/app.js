import { h, Component } from 'react';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import NotFoundPage from '../routes/Notfound';
import ErrorBoundary from 'Errors/ErrorBoundary';
import GlobalStyles from 'GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from 'tz-hooks';

// Code-splitting is automated for routes
import Home from '../routes/HomePage';
export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	theme = useTheme();

	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<ThemeProvider theme={this.theme}>
						<GlobalStyles />
						<ErrorBoundary mt="1em">
							<Layout>
								<Router onChange={this.handleRoute}>
									<Home path="/" />
									<NotFoundPage type="404" default />
								</Router>
							</Layout>
						</ErrorBoundary>
					</ThemeProvider>
				</div>
			</Provider>
		);
	}
}

const Test = styled.div`
	background: red;
`;
