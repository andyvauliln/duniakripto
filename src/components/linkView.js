import { h } from 'preact';
import TextView from './textView';

//types: default, nav

const LinkView = ({ children, ...props }) => (
	<TextView as="a" color={props.tp === 'nav' ? 'var(--nav-link-color)' : 'var(--link-color)'} {...props}>
		{children}
	</TextView>
);

export default LinkView;
