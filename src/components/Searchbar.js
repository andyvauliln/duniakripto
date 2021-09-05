import { h } from 'preact';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { DataView, FlexRow, Icons } from 'tz-base';
import { useStorage } from 'tz-hooks';
import { useState, useRef } from 'preact/hooks';

const Searchbar = ({ history }) => {
	const [value, setValue] = useState('');
	const storage = useStorage();
	const [isFocus, setIsFocus] = useState(false);
	const [isHoldFocus, setHoldFocus] = useState(false);
	const inputEl = useRef(null);
	const [t] = useTranslation();

	const handleOnChange = value => {
		setValue(value);
	};

	const handleKeyPress = event => {
		switch (event.keyCode) {
			case 13: // ENTER
				setValue(value);
				break;
			case 27: // ESC
				if (value) {
					clear();
				} else {
					inputEl.current.blur();
					setIsFocus(false);
				}
				break;
		}
	};

	const clear = e => {
		setValue('');
		inputEl.current.focus();
	};

	return (
		<FlexRow>
			<SearchInput
				type="text"
				ref={inputEl}
				value={value || ''}
				onKeyDown={e => handleKeyPress(e)}
				onChange={e => handleOnChange(e.target.value)}
				placeholder={t('tk_search_long')}
			/>
			<Buttons>
				{value && (
					<ResetButton className="nostyle" onClick={e => clear()} pointer>
						<Icons type="x" fsize="slg" variant="inherit" />
					</ResetButton>
				)}
				{(isFocus || isHoldFocus || value) && storage.history.length > 0 && (
					<ClearButton onClick={e => clear(e)} onMouseOver={e => setHoldFocus(true)} onMouseOut={e => setHoldFocus(false)}>
						<DataView fsize="sm" variant="inherit">
							tk_clear_history
						</DataView>
					</ClearButton>
				)}
			</Buttons>
		</FlexRow>
	);
};

const Buttons = styled.div`
	display: flex;
	position: absolute;
	right: 0.5em;
	top: 50%;
	transform: translate(0, -50%);
`;

const ClearButton = styled.button`
	padding: 0.15em 0.5em;
	margin-left: 0.5em;
	& > * {
		vertical-align: text-top;
	}
`;

const ResetButton = styled.button`
	padding: 0;
	font-size: 1em;
	line-height: 0;
`;

const SearchInput = styled.input`
	flex-grow: 1;
	&:focus {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

export default Searchbar;
