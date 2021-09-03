import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from 'tz-base';
import WindowList from 'tz-base/WindowList';
import { StaticCollection } from 'tz-model';

const AutocompleteSelector = ({ defaultValue, data, selectHandler, RowTemplate, limit = 20 }) => {
  const [suggestions, setSuggestions] = React.useState(new StaticCollection([]));
  const [value, setValue] = React.useState(defaultValue);
  const [isFocus, setIsFocus] = React.useState(false);

  const inputEl = React.useRef(null);

  const handleOnChange = value => {
    if (value !== '') {
      updateSuggestions(value.toLowerCase());
    }
    setValue(value);
  };

  const handleKeyPress = event => {
    if (event.keyCode === 27) {
      inputEl.current.blur();
      setIsFocus(false);
    }
  };

  const updateSuggestions = value => {
    const suggestions = data
      .filter(item => {
        return item.toLowerCase().indexOf(value) > -1;
      })
      .map(item => {
        return { value: item, selectHandler: e => searchHandler(item) };
      });
    if (suggestions.length) {
      setSuggestions(new StaticCollection(suggestions).config({ limit: limit }));
    }
  };

  const searchHandler = value => {
    if (!value) return;

    setValue(value);
    selectHandler(value);
  };
  const isShowSuggestions = () => {
    return isFocus && value && !suggestions.isEmpty;
  };

  return (
    <FlexColumn>
      <SearchWrapper>
        <SearchInput
          type="text"
          ref={inputEl}
          value={value || ''}
          onChange={e => handleOnChange(e.target.value)}
          onBlur={e => setIsFocus(false)}
          onFocus={e => setIsFocus(true)}
          onKeyDown={e => handleKeyPress(e)}
        />
      </SearchWrapper>
      {isShowSuggestions() && (
        <ListWrapper>
          <WindowList collection={suggestions} RowTemplate={RowTemplate} />
        </ListWrapper>
      )}
    </FlexColumn>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  z-index: 10;
`;
const SearchInput = styled.input`
  font-weight: 300;
  width: 100%;
`;
const ListWrapper = styled.div`
  max-height: 25vh;
  overflow-y: auto;
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: var(--outer-shadow);
`;

export default AutocompleteSelector;
