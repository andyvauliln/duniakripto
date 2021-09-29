import { h } from 'preact';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { translate } from './translation';
import { useGlobal } from 'reactn';

const MainButton = ({ handleClick, children, ...props }) => {
	const lang = useGlobal('lang')[0];
	if (typeof children === 'string' && children.trim().indexOf('tk_') > -1) {
		const t = translate(lang, children);
		if (!t) {
			console.log(t, 'missing translation');
		}
		children = t ? t : children;
	}
	const onClick = e => {
		e.stopPropagation();
		handleClick();
	};
	return (
		<Button onClick={e => onClick(e)}>
			<span class="line1" />
			<span class="line2" />
			<span class="line3" />
			<span class="line4" />
			{children}
		</Button>
	);
};

const Button = styled.button`
	font-family: 'Oswald', sans-serif;
	position: relative;

	position: relative;
	text-transform: uppercase;
	padding: 8px 30px;
	border-radius: 0;
	border: none;
	background: transparent;
	color: white;

	span {
		position: absolute;
		background-color: white;
		display: block;
		transition: all 200ms;
	}
	.line1,
	.line3 {
		height: 2px;
		width: 20px;
	}
	.line2,
	.line4 {
		height: 20px;
		width: 2px;
	}
	.line1,
	.line2 {
		top: 0;
		right: 0;
	}
	.line3,
	.line4 {
		bottom: 0;
		left: 0;
	}
	.reverse .line1,
	.reverse .line3 {
		width: 100%;
	}
	.reverse .line2,
	.reverse .line4 {
		height: 100%;
	}
	&:hover,
	&:active {
		background-color: transparent;
		color: white;
	}
	&:hover .line1,
	&:active .line1,
	&:hover .line3,
	&:active .line3 {
		width: 100%;
	}
	&:hover .line2,
	&:active .line2,
	&:hover .line4,
	&:active .line4 {
		height: 100%;
	}
	&:hover.reverse .line1,
	&:active.reverse .line1,
	&:hover.reverse .line3,
	&:active.reverse .line3 {
		width: 20px;
	}
	&:hover.reverse .line2,
	&:active.reverse .line2,
	&:hover.reverse .line4,
	&:active.reverse .line4 {
		height: 20px;
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
