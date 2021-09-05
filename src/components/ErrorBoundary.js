import { h, Component } from 'preact';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Centered, DataView, MainButton, H3, Icons } from 'tz-base';
import { isObject } from 'tz-utils';

class ErrorBoundary extends Component {
	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
		this.toastId = null;
	}

	componentDidCatch(error, errorInfo) {
		if (!toast.isActive(this.toastId)) {
			this.toastId = toast.error(isObject(error) ? JSON.stringify(error) : error.toString());
		}
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<Wrapper {...this.props}>
					<Icons type="alert-triangle" variant="headline" fsize="x3l" />
					<H3 k="tk_something_wrong" />
					<DataView mb="1em" size="lg" variant="label">
						{this.state.error.message}
					</DataView>
					<MainButton handleClick={e => this.setState({ hasError: false, error: null })}>{'tk_reload'}</MainButton>
				</Wrapper>
			);
		}

		return this.props.children;
	}
}
const Wrapper = styled(Centered)`
	${props => (props.noborder ? '' : 'border: 0.1em solid var(--outline-color);')}
	padding: 1em;
	text-align: center;
`;
export default ErrorBoundary;
