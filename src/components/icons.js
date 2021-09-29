import { h } from 'preact';
import styled from 'styled-components';
import { layout, position, space } from 'styled-system';

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

const Icons = ({ type, ...props }) => {
	switch (type) {
		case 'views':
			return (
				<Wrapper {...props}>
					<path
						className="color-fill"
						viewBox="0 0 22.542 13.976"
						d="M11.271 0C7.354 0 3.615 2.208.456 6.385L0 6.988l.456.6c3.159 4.176 6.9 6.384 10.815 6.384s7.656-2.208 10.814-6.384l.457-.6-.457-.6C18.926 2.208 15.187 0 11.271 0zM2.524 6.988C5.161 3.742 8.151 2.026 11.212 2a4.986 4.986 0 0 0-.654 9.922C7.727 11.682 4.972 10 2.524 6.988zm9.467 4.938a4.986 4.986 0 0 0-.655-9.921c3.058.024 6.046 1.739 8.681 4.983-2.446 3.012-5.198 4.691-8.026 4.938z"
					/>
				</Wrapper>
			);
		case 'null':
			return <></>;
		default:
			return <TextWrapper {...props}>{type}</TextWrapper>;
	}
};
const TextWrapper = styled.div`
  ${layout}
  ${space}
  ${position}

  text-align: center;
  font-size: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
  min-width: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
`;

const Wrapper = styled.svg`
  ${layout}
  ${space}
  ${position}
  ${props => {
			props.variant = props.variant || 'text';
			return '';
		}}
  width: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
  height: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};
  min-width: ${props => (props.fsize ? fontSizes[props.fsize] || fontSizes.md : fontSizes.md)};

  .color-fill{
    fill: ${props => (props.variant === 'inherit' ? 'currentColor' : 'var(--' + props.variant + '-color)')};
  }
  .color-stroke{
    stroke:  ${props => (props.variant === 'inherit' ? 'currentColor' : 'var(--' + props.variant + '-color)')};
  }
`;

export default Icons;
