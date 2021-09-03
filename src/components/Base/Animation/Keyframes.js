import { css, keyframes } from 'styled-components';

export const opacityFrame = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const widthFrame = awidth => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${awidth};
    }
`;

const translateFrameRight = x => keyframes`
    0% {
        transform: translate(-25em, 0)
    }
    100% {
        transform: translate(0em, 0);
    }
`;
const positionRight = x => keyframes`
    0% {
        right: 0
    }
    100% {
        right: ${x}
    }
`;
const positionLeft = keyframes`
    0% {
        left: -23em;
    }
    100% {
        left: 0;
    }
`;

const translateFrameLeft = x => keyframes`
  0% {
    transform: translate(${x}px, 0)
  }
  100% {
    transform: translate(0em, 0);
  }
`;

const strokeOffset = aOffcet => keyframes`
  0% {
    stroke-dashoffset: 250px;
  }
  100% {
    stroke-dashoffset: ${aOffcet}px;
  }
`;

export const animateWidth = css`
  display: ${props => (props.isAnimate ? 'flex' : 'none')};
  animation: ${props => widthFrame(props.awidth || '100%')} ${props => props.time || 1000}ms ease-out;
  animation-fill-mode: forwards;
`;

export const animatePositionLeft = css`
  display: ${props => (props.isAnimate ? 'flex' : 'none')};
  animation: ${positionLeft} ${props => props.time || 1000}ms ease-out;
  animation-fill-mode: forwards;
`;

export const animateOpacity = css`
  display: ${props => (props.isAnimate ? 'flex' : 'none')};
  animation: ${opacityFrame} ${props => props.time || 1000}ms ease-out;
  animation-delay: ${props => props.delay || 0}ms;
  animation-fill-mode: forwards;
`;

export const animateTranslateRight = css`
  display: ${props => (props.isAnimate ? 'flex' : 'none')};
  animation: ${translateFrameRight} ${props => props.time || 1000}ms ease-out;
`;

export const animateTranslateLeft = css`
  animation: ${props => translateFrameLeft(props.cwidth)} ${props => props.time || 1000}ms ease-out;
`;

export const animateStrokeOffset = css`
  animation: ${props => strokeOffset(props.aOffcet)} ${props => props.time || 1000}ms cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const animatePositionRight = css`
  display: ${props => (props.isAnimate ? 'flex' : 'none')};
  animation: ${props => positionRight(props.right || '-5em')} ${props => props.time || 100}ms ease-out;
  animation-fill-mode: forwards;
`;
