import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { DataView, FlexRow, Icons } from 'tz-base';
import { useStorage } from 'tz-hooks';
import dataService from 'tz-model/data-service';
import { getHashSuggestions, getHashType } from 'tz-utils';
import History from './SearchHistory';

const Searchbar = ({ history }) => {
  const query = new URLSearchParams(useLocation().search);
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const storage = useStorage();
  const [isFocus, setIsFocus] = React.useState(false);
  const [isHoldFocus, setHoldFocus] = React.useState(false);
  const inputEl = React.useRef(null);
  const [t] = useTranslation();

  const handleOnChange = value => {
    if (setSuggestions.length) {
      setSuggestions([]);
    }
    if (value !== '') {
      updateSuggestions(value);
    }
    setValue(value);
  };

  React.useLayoutEffect(() => {
    const v = query.get('q');
    if (v) {
      setValue(v);
      updateSuggestions(v);
      setTimeout(() => {
        inputEl.current.focus();
        setIsFocus(true);
      }, 500);
    }
  }, []);

  const handleKeyPress = event => {
    switch (event.keyCode) {
      case 13: // ENTER
        searchHandler({ value });
        break;
      case 27: // ESC
        if (!!value) {
          reset();
        } else {
          inputEl.current.blur();
          setIsFocus(false);
        }
        break;
    }
  };

  const saveSearch = (svalue, type, details) => {
    let newHistory = storage.history.filter(r => r.value + r.type !== svalue + type);
    storage.setItem('history', [{ type, value: svalue, details }, ...newHistory]);
  };

  const updateSuggestions = value => {
    value = value.replace(/,/g, '');
    const number = Number(value);

    if (isNaN(number)) {
      setSuggestions(suggestions => [...suggestions, ...getHashSuggestions(value)]);
    } else {
      setSuggestions(suggestions =>
        [...suggestions, number <= dataService.tip.height && { type: 'block', value }, number <= dataService.tip.cycle && { type: 'cycle', value }].filter(
          Boolean
        )
      );
    }
  };

  const reset = () => {
    setValue('');
    setSuggestions([]);
  };

  const clear = e => {
    storage.setItem('history', []);
    reset();
    inputEl.current.focus();
  };

  const searchHandler = ({ value, type, details }) => {
    if (!value) return;
    type = type || getHashType(details || value, 1) || (!isNaN(parseInt(value)) ? 'block' : null);
    if (!type) {
      return;
    }
    saveSearch(value, type, details);
    reset();
    inputEl.current.blur();
    value = value.replace(/[,.\s]/g, ''); // strip number delimiters
    var urlBuilder = [''];
    switch (type) {
      case 'block':
      case 'account':
      case 'operation':
      case 'protocol':
        urlBuilder.push(value);
        break;
      default:
        urlBuilder.push(...[type, value]);
    }
    history.push(urlBuilder.join('/'));
  };

  const isShowHistory = () => {
    return (isFocus || isHoldFocus) && ((value && suggestions.length > 0) || (!value && storage.history.length > 0));
  };

  return (
    <>
      <FlexRow>
        <SearchInput
          type="text"
          ref={inputEl}
          value={value || ''}
          onChange={e => handleOnChange(e.target.value)}
          onBlur={e => setTimeout(() => setIsFocus(false), 100)}
          onFocus={e => setIsFocus(true)}
          onKeyDown={e => handleKeyPress(e)}
          placeholder={t('tk_search_long')}
        />
        <Buttons>
          {value && (
            <ResetButton className="nostyle" onClick={e => reset()} pointer>
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

      {isShowHistory() && <History suggestions={suggestions} searchHandler={searchHandler} value={value} searchHistory={storage.history} />}
    </>
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

export default withRouter(Searchbar);
