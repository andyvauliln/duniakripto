import { h } from 'preact';
import styled, { keyframes } from 'styled-components';

const strokeWidth = 3;
const viewBoxSize = 24;
const coordinate = viewBoxSize / 2;
const radius = viewBoxSize / 2 - strokeWidth / 2;
const outline = Math.PI * radius * 2;
const outlineHalf = outline / 2;

const loading = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = ({ color = 'var(--secondary-color)', width = 18, height = 18, role = 'status', ...props }) => (
	<svg color={color} width={width} height={height} role={role} {...props}>
		<circle opacity=".25" cx={coordinate} cy={coordinate} r={radius} />
		<circle cx={coordinate} cy={coordinate} r={radius} strokeDasharray={outlineHalf} />
	</svg>
);

Spinner.defaultProps = {
	xmlns: 'http://www.w3.org/2000/svg',
	height: viewBoxSize,
	width: viewBoxSize,
	viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`,
};

export default styled(Spinner)`
	animation: ${loading} 1s linear infinite;
	display: inline-block;
	fill: none;
	stroke: currentColor;
	stroke-linecap: round;
	stroke-width: ${strokeWidth};
	flex: 0 0 auto;
	pointer-events: none;
	user-select: none;
	vertical-align: middle;
`;
