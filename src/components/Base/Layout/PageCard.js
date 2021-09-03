import React from 'react';
import styled from 'styled-components';
import { H3 } from 'tz-base';
import { minDevices } from 'tz-config';
import { BorderedBox, FlexColumn } from './FlexBoxes';

// nopad (bool) disable content padding (used for nopad charts)
// nogrow (bool) disable flex grow and 100% height
// bg (color) overwrites background color
// border (color) enables border and sets border color
const PageCard = ({ children, title = '', header, bg = 'card-bg', border, nopad, nogrow, rightSide, minHeight, ...props }) => {
  return (
    <Wrapper {...props} nogrow={nogrow}>
      {title && (
        <Header>
          <H3 k={title} />
          {rightSide && rightSide}
        </Header>
      )}
      {header && header}
      {children && (
        <Content bg={bg} border={border} nopad={nopad} nogrow={nogrow} minHeight={minHeight}>
          {children}
        </Content>
      )}
    </Wrapper>
  );
};

const Content = styled(BorderedBox)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${props => `var(--${props.bg})`};
  border: ${props => (props.border ? `1px solid var(--${props.border}-color)` : 'none')};
  ${props =>
    !props.nogrow
      ? `
    @media ${minDevices.mobileM} {
      flex-grow: 1;
      height: 100%;
    }`
      : ''}
`;

const Header = styled.div`
  background: var(--base-bg);
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled(FlexColumn)`
  width: 100%;
  height: ${props => props.nogrow || '100%'};
  grid-area: ${props => props.area || 'unset'};
`;

export default PageCard;
