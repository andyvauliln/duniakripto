import React from 'reactn';
import styled from 'styled-components';
import { DataView, FlexColumn, Icons } from 'tz-base';

const Sellector = ({ items, item, handleChange, Template = null }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (item, e) => {
    e.stopPropagation();
    handleChange(item);
    setIsOpen(false);
  };
  return (
    <FlexColumn tabIndex="-1" onBlur={e => setIsOpen(false)}>
      {Template ? (
        <div onMouseDown={e => setIsOpen(!isOpen)}>
          <Template data={item} isActive={true} />
        </div>
      ) : (
        <SelectButton onClick={e => setIsOpen(!isOpen)}>
          <DataView variant="label">{'tk_' + item.name}</DataView>
          <Icons variant="label" fsize="sm" ml="0.3em" type="down" my="auto" />
        </SelectButton>
      )}
      {isOpen && (
        <Wrapper>
          {items
            .filter(d => d && d.name !== item.name)
            .map((item, index) => {
              return Template ? (
                <Template data={item} isActive={isOpen} />
              ) : (
                <ListItem key={index} onMouseDown={e => handleClick(item, e)}>
                  <DataView color="inherit" fsize="sm">
                    {'tk_' + item.name}
                  </DataView>
                </ListItem>
              );
            })}
        </Wrapper>
      )}
    </FlexColumn>
  );
};

const SelectButton = styled.div`
  padding: 0.3em 1em;
  border: 1px solid var(--outline-color);
  cursor: pointer;
  border-radius: 0.25em;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  z-index: 100;
  top: 2.2em;
  background: var(--nav-bg);
  > *:not(:last-child) {
    border-bottom: 1px solid var(--divider-color);
  }
`;

const ListItem = styled.div`
  padding: 0.3em 1.5em;
  cursor: pointer;
  width: 100%;
  color: var(--label-color);

  &:hover {
    color: var(--link-color);
  }
`;

export default Sellector;
