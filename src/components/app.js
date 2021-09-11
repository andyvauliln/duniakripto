import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import Header from './header';
import Footer from './footer';
import NotFoundPage from '../routes/notfound';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Blogs from '../routes/blogs';
import Blog from '../routes/blog';
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Blogs path="/blogs/" />
						<Blog path="/blog/:name" />
						<Contact path="/contact/" />
						<ContactSuccess path="/contact/success" />
						<NotFoundPage type="404" default />
					</Router>
					{/* <Footer /> */}
				</div>
			</Provider>
		);
	}
}
