import { h } from 'preact';
import TextView from './textView';
import styled from 'styled-components';

//types: default, nav

const Logo = ({ children, ...props }) => (
	<LogoWrapper>
		<Line />
		<Air fsize="slg">&#9651;</Air>
		<TextView fweight="900" px="30px" fsize="slg">
			Airlab
		</TextView>
		<Water fsize="slg">&#9661;</Water>
	</LogoWrapper>
);

const LogoWrapper = styled.div`
	position: relative;
	padding: 0 5px;
`;
const Air = styled(TextView)`
	position: absolute;
	top: -2px;
	left: 5px;
`;
const Water = styled(TextView)`
	position: absolute;
	right: 5px;
	top: 3px;
`;
const Line = styled.div`
	height: 1px;
	background: #fff;
	position: absolute;
	top: 14px;
	width: 25px;
`;

export default Logo;
