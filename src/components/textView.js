import { h } from 'preact';
import styled from 'styled-components';
import { useGlobal } from 'reactn';
import { translate } from './translation';
import { flexbox, layout, position, space, textAlign } from 'styled-system';
import { Link } from 'preact-router/match';

const fontSizes = {
	smt: '0.8em',
	sm: '0.9em',
	md: '1em',
	lg: '1.2em',
	lgt: '1.4em',
	slg: '1.6em',
	xxs: '1.8em',
	xxm: '2em',
	xxl: '2.2em',
	x3l: '3em'
};
const TextView = ({ children, as, ...props }) => {
	const lang = useGlobal('lang')[0];
	if (typeof children === 'string' && children.trim().indexOf('tk_') > -1) {
		const t = translate(lang, children);
		if (!t) {
			console.log(t, 'missing translation');
		}
		children = t ? t : children;
	}
	if (as === 'a') {
		if (props.extern) {
			props.target = '_blank';
			props.rel = 'noopener noreferrer';
		}
		return (
			<LinkWrapper src={props.href} href={props.href} {...props}>
				{children}
			</LinkWrapper>
		);
	}
	return (
		<TextWrapper as={as} {...props} {...props}>
			{children}
		</TextWrapper>
	);
};

const TextWrapper = styled.span`
    ${props => props.style};
    font-family: 'Oswald', sans-serif;
    ${space}
    ${layout}
    ${position}
    ${flexbox}
    ${textAlign}
    text-transform: ${props => props.transform || 'inherit'};
	color: ${props => (props.color ? props.color : 'var(--text-color)')};
	font-size: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
	font-weight: ${props => props.fweight || 'inherit'};
`;

const LinkWrapper = styled(Link)`
    font-family: 'Oswald', sans-serif;
    ${space}
    ${layout}
    ${position}
    ${flexbox}
    ${textAlign}
    ${props => console.log(props)}
    text-transform: ${props => props.transform || 'inherit'};
	color: ${props => (props.color ? props.color : 'var(--text-color)')};
	font-size: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
	font-weight: ${props => props.fweight || 'inherit'};
	&:hover {
		color: var(--link-color);
	}
`;
export default TextView;
