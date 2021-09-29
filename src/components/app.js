import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import Header from './header';
import GlobalStyles from './globalStyles';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home.page';
import Events from '../routes/events.page';
import News from '../routes/news.page';
import Education from '../routes/education.page';
import Eksklusif from '../routes/eksklusif.page';
import Specprojects from '../routes/specprojects.page';
import NotFoundPage from '../routes/notfound.page';
import MarketData from '../routes/marketdata.page';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<GlobalStyles />
					<Header />
					<main>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<Events path="/events" />
							<News path="/news" />
							<Education path="/education" />
							<Eksklusif path="/ekslusif" />
							<Specprojects path="/specprojects" />
							<MarketData path="/marketdata" />
							<NotFoundPage type="404" default />
						</Router>
					</main>
					<Footer />
				</div>
			</Provider>
		);
	}
}
