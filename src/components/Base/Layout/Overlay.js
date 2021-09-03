import styled from 'styled-components';

const Overlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 100;
	${props => (props.pointer ? 'cursor: pointer;' : '')}
	height: 100vh;
	overscroll-behavior: contain;
`;
export default Overlay;
