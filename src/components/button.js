import { h } from 'preact';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';

import TextView from './textView';

const MainButton = ({ handleClick, children, ...props }) => {
	const onClick = e => {
		e.stopPropagation();
		handleClick();
	};
	return (
		<Button type="button" {...props} onClick={e => onClick(e)}>
			<TextView variant="inherit">{children}</TextView>
		</Button>
	);
};

const Button = styled.button`
	color: var(--white);
	border: 1px solid var(--link-color);
	background: var(--link-color);
	padding: 0.5em 1.5em;
	cursor: pointer;
	text-align: center;
	width: ${props => props.bwidth || 'auto'};
	border-radius: 0.25rem;
	/* background: var(--button-bg);
	color: var(--text-color); */
	border: 1px solid var(--outline-color);
	&:hover {
		color: var(--link-color);
		border: 1px solid #fff;
		background: var(--button-hover-bg);
	}
	${space}
`;

// const buttonStyles = theme.variants('mode', 'mode', {
// 	active: {
// 		light: css`
// 			color: var(--link-color);
// 			border: 1px solid var(--outline-color);
// 			background: var(--button-active-bg);
// 		`,
// 		dark: css`
// 			color: var(--link-color);
// 			border: 1px solid var(--outline-color);
// 			background: var(--button-active-bg);
// 		`,
// 		solardark: css`
// 			color: var(--link-color);
// 			border: 1px solid var(--outline-color);
// 			background: var(--button-active-bg);
// 		`
// 	},
// 	grey: {
// 		light: css`
// 			&:hover {
// 				color: var(--text-color);
// 				background: var(--dim-color);
// 				border: 1px solid var(--outline-color);
// 			}
// 		`,
// 		dark: css`
// 			&:hover {
// 				color: var(--text-color);
// 				background: var(--button-active-bg);
// 				border: 1px solid var(--outline-color);
// 			}
// 		`,
// 		solardark: css`
// 			&:hover {
// 				color: var(--text-color);
// 				background: var(--button-active-bg);
// 				border: 1px solid var(--outline-color);
// 			}
// 		`
// 	},
// 	blue: {
// 		light: css`
// 			color: var(--white);
// 			border: 1px solid var(--link-color);
// 			background: var(--link-color);
// 		`,
// 		dark: css`
// 			color: var(--white);
// 			border: 1px solid var(--link-color);
// 			background: var(--link-color);
// 		`,
// 		solardark: css`
// 			color: var(--white);
// 			border: 1px solid var(--link-color);
// 			background: var(--link-color);
// 		`
// 	}
// });

export default MainButton;
