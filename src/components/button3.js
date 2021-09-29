import { h } from 'preact';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { translate } from './translation';
import { useGlobal } from 'reactn';
import { Link } from 'preact-router';

const MainButton = ({ handleClick, children, ...props }) => {
	const lang = useGlobal('lang')[0];
	if (typeof children === 'string' && children.trim().indexOf('tk_') > -1) {
		const t = translate(lang, children);
		if (!t) {
			console.log(t, 'missing translation');
		}
		children = t ? t : children;
	}

	return (
		<Button class="button outline" {...props}>
			{children}
			<span class="lines" />
		</Button>
	);
};

const Button = styled(Link)`
	font-family: 'Oswald', sans-serif;
	font-size: 20px;
	display: inline-block;
	font-weight: bold;
	letter-spacing: 2px;
	padding: 15px 30px;
	text-decoration: none;
	text-transform: uppercase;
	transition: background-color 300ms;
	text-align: center;

	color: white;
	overflow: hidden;
	position: relative;

	&:before,
	&:after,
	.lines:before,
	.lines:after {
		background-color: white;
		content: '';
		height: 2px;
		left: 0;
		position: absolute;
		top: 0;
		transition: transform 300ms;
		width: 100%;
	}
	&:before {
		bottom: 0;
		top: auto;
	}
	.lines {
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 0;
	}
	.lines:before,
	.lines:after {
		height: 100%;
		width: 2px;
	}
	.lines:after {
		left: auto;
		right: 0;
	}
	&:hover:before {
		transform: translateX(-101%);
	}
	&:hover:after {
		transform: translateX(101%);
	}
	&:hover .lines:before {
		transform: translateY(-101%);
	}
	&:hover .lines:after {
		transform: translateY(101%);
	}

	${space}
`;

export default MainButton;
