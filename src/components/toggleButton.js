import { h } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';

const ToggleButton = ({ checked, onClick, ...props }) => {
	console.log(checked, props, 'lang');
	// const [inSideChecked, setInSideChecked] = useState(false);
	const id = 'checkbox-' + parseInt(Math.random() * 1000);
	return (
		<Wrapper>
			<CheckBox type="checkbox" id={id} checked={checked} onInput={e => onClick(e)} />
			<CheckBoxLabel htmlFor={id} both={props.both} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
`;
const CheckBoxLabel = styled.label`
	display: flex;
	width: 1.75rem;
	height: 1rem;
	border-radius: 0.5rem;
	background: ${props => (props.both ? 'var(--link-color)' : 'var(--dim-color)')};
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 0.9rem;
		height: 0.9rem;
		top: 0.05rem;
		left: 0.1rem;
		background: ${props => (props.both ? '#fff' : ' var(--inactive-color)')};
		transition: 0.2s;
	}
`;
const CheckBox = styled.input`
	display: none;
	${props =>
		props.checked &&
		`
    &:checked + ${CheckBoxLabel} {
      background: var(--link-color);
      &::after {
        content: '';
        background: var(#fff);
        left: .75rem;
        transition: 0.2s;
      }
    }
  `}
`;

export default ToggleButton;
