import { h } from 'preact';
import TextView from './textView';

const TitleView = ({ as, children, ...props }) => {
	console.log('title', as);
	return (
		<TextView fsize={as === 'h1' ? 'xxm' : 'md'} transform="uppercase" as={as} fweight={as === 'h1' ? '900' : '900'} {...props}>
			{children}
		</TextView>
	);
};

export default TitleView;
