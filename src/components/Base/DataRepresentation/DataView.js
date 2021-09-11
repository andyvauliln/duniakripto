import moment from 'moment';
import numeral from 'numeral';
import { h } from 'preact';
import { Trans, withTranslation } from 'react-i18next';
import { Link } from 'preact-router/match';
import styled from 'styled-components';
import { flexbox, layout, position, space, textAlign } from 'styled-system';
import { fontSizes } from 'tz-config';
import { isBool, isDate, isDefined, isNumber, isString, toDuration } from 'tz-utils';
import Icons from '../Svg/Icons';

const DataView = ({ tag = 'span', t, i18d, children, v, ...props }) => {
	children = isDefined(children) ? children : v;
	// select HTML tag based on variant
	const as = variantToTag(props.variant, tag);
	if (as === 'a') {
		if (props.extern) {
			props.target = '_blank';
			props.rel = 'noopener noreferrer';
			props.href = props.href || props.to.toString();
			delete props.to;
		} else {
			props.to = props.to ? props.to.toString() : props.href;
			delete props.href;
		}
	}
	console.log(children);
	// add variant as class name
	if (props.variant && props.variant !== 'inherit') {
		props.className = props.variant;
	}
	//if need translate or string
	if (isString(children) && children.startsWith('tk_')) {
		children = <Trans>{t(children, i18d)}</Trans>;
	} else if (isBool(children)) {
		children = children.toString();
	}
	//if numbers and need formatting or dim
	else if (!isString(children) && isNumber(children)) {
		if (props.dformat === 'intr') {
			children = toDuration(children, props.base, props.zero, props.prefix, props.stop, props.trim);
		} else if (props.dim) {
			const num = numeral(children).format(props.dformat);
			let decimal = numeral.locales[numeral.options.currentLocale].delimiters.decimal;
			let re = /^(.*)\.([^ ]*)( .*)?$/;
			if (decimal === ',') {
				re = /^(.*),([^ ]*)( .*)?$/;
			}
			let arr = re.exec(num.toString());
			//prettier-ignore
			children =
			//prettier-ignore
				arr && arr.length > 0 ? (
					<>'					'{arr[1] }'					'{arr.length > 2 && (
						<Dim>
							{decimal}
							{arr[2]}
						</Dim>
					)}'					'{arr.length > 3 && arr[3]}'				'</>
				) : (
					<>{num}</>
				);
		} else {
			const formatted = numeral(children).format(props.dformat || ',.', Math.floor);
			children = formatted.indexOf('NaN') === 0 ? numeral(0).format(props.dformat || ',.', Math.floor) : formatted;
		}
	}
	//if date and need formatting, time ago or timezone support
	else if (isDate(children)) {
		if (props.dformat === 'ago') {
			children = moment(children).fromNow();
		} else {
			children = moment.parseZone(children).format(props.dformat || 'lll');
		}
	}
	// if (isUndefined(children)) {
	//   children = ;
	// //   return (<Placeholder variant="inactive" width="33%" {...props} />);
	// }
	if (as === 'a' && !props.extern) {
		// render internal links
		return children ? <TextLink {...props}>{children}</TextLink> : <Placeholder width="30%" />;
	}
	// render external links or any other component
	return children ? (
		<Text as={as} {...props}>
			{children}
			{props.externicon && <Icons type="link" variant={props.variant} fsize="sm" ml=".25em" />}
		</Text>
	) : (
		<Placeholder width="30%" />
	);
};

export const variantToTag = (variant, tag) => {
	switch (variant) {
		case 'h1':
		case 'h2':
		case 'h3':
			return variant;
		case 'link':
		case 'button':
			return 'a';
		default:
			return tag;
	}
};

export const Placeholder = styled.span`
  ${space}
  ${layout}
  ${position}
  ${flexbox}
  min-height: 1rem;
  background: ${props => (props.color ? props.color : 'var(--invalid-color)')};
  display: ${props => (props.block ? 'block' : 'unset')};
`;

export const Text = styled.span.attrs(props => ({
	color: props.color || (props.variant && props.variant !== 'inherit' ? 'var(--' + props.variant + '-color)' : 'inherit'),
}))`
  ${space}
  ${layout}
  ${position}
  ${flexbox}
  ${textAlign}
  text-transform: ${props => props.transform || 'inherit'};
  ${props => (props.ellipsis ? 'text-overflow: ellipsis; overflow: hidden;' : '')}
  color: ${props => (props.color ? props.color : 'var(--text-color)')};
  display: ${props => (props.block ? 'block' : 'unset')};
  font-weight: ${props => props.fweight || 'inherit'};
  font-style: ${props => props.fstyle || 'inherit'};
  font-size: ${props => (props.fsize === 'inherit' ? 'inhert' : props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
  white-space: ${props => (props.nowrap ? 'nowrap' : 'normal')};
  word-break: ${props => (props.wordbreak ? 'break-word' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'unset')};
 ${props => (props.pointer ? 'cursor: pointer; &:hover { color: var(--highlight-color) }' : '')}
`;

const Dim = styled.span`
	opacity: 0.7;
`;
// color: var(--dim-color);

// filter all attributes that are not supposed to be forwarded to Link
// this is due to a React v4/v5 design decision to pass all properties
// unfiltered down to custom components, see
// https://github.com/styled-components/styled-components/issues/2131
// https://stackoverflow.com/questions/49834251/how-to-extend-styled-component-without-passing-props-to-underlying-dom-element
const TextLink = styled(({ textAlign, tReady, i18n, variant, ...props }) => <Link {...props} />)`
  ${space}
  ${layout}
  ${position}
  ${flexbox}
  ${textAlign}
  text-transform: ${props => props.transform || 'inherit'};
  ${props => (props.ellipsis ? 'text-overflow: ellipsis; overflow: hidden;' : '')}
  color: ${props => (props.color ? props.color : 'var(--link-color)')};
  display: ${props => (props.block ? 'block' : 'unset')};
  font-weight: ${props => props.fweight || 'inherit'};
  font-style: ${props => props.fstyle || 'inherit'};
  font-size: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
  white-space: ${props => (props.nowrap ? 'nowrap' : 'pre')};
  text-decoration: ${props => (props.underline ? 'underline' : 'unset')};
  ${props => (props.pointer ? 'cursor: pointer;' : '')}
`;

export default withTranslation()(DataView);
