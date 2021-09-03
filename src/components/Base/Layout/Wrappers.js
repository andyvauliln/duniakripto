import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { flexbox } from 'styled-system';
import { isArray } from 'tz-utils';

//mobile
export const HeaderRightNav = styled.div`
  position: fixed;
  top: 0.75em;
  right: 0.75em;
  z-index: 11;
`;

export const CardWrapper = styled.div`
  ${flexbox}
  display: flex;
  flex-direction: row;
  position: relative;
  background: var(--card-bg);
  border-bottom: 1px solid var(--divider-color);
  padding: 1em;
  &:last-child {
    border-bottom: none;
  }
  & span:not(:last-child):after {
    content: ' ';
  }
  & a:not(:last-child):after {
    content: ' ';
  }
`;

// add whitespace after sentence fragments
export const LinkedCardWrapper = styled(({ to, ...props }) => <Link to={'/' + (isArray(to) ? to.join('/') : to)} {...props} />)`
  display: flex;
  flex-direction: row;
  position: relative;
  background: var(--card-bg);
  border-bottom: 1px solid var(--divider-color);
  padding: 1em;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: var(--card-highlight-bg);
  }
  & span:not(:last-child):after {
    content: ' ';
  }
  & a:not(:last-child):after {
    content: ' ';
  }
`;

export const ListLegend = styled.div.attrs(props => ({
  className: 'sub-header',
}))`
  ${props =>
    props.sticky &&
    css`
      position: sticky;
      top: 6em;
    `}

  justify-content: space-between;
  padding: 0.5em 1em;
  z-index: 1;
  display: flex;
  background: var(--card-bg);
  box-shadow: ${props => (props.noshadow ? 'none' : 'var(--outer-shadow)')};
`;

export const DevicePageHeader = styled.nav.attrs(props => ({
  className: 'sticky-header',
}))`
  position: sticky;
  top: 3em;
  z-index: 10;
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: center;
  width: calc(100% + 20px);
  margin-left: -10px;
  margin-right: 10px;
  padding: 0 10px;
  height: 3em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: var(--base-bg);
`;

export const PageHeaderRightElements = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  > *:not(:last-child) {
    border-right: 2px solid var(--divider-color);
    padding-right: 2em;
  }
  > * {
    padding-left: 2em;
  }
`;

export const PageHeaderWrapper = styled.div`
  border-bottom: 2px solid var(--divider-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 6em;
  padding: 0 0.5em;
`;

export const PageHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 4.35em;
  z-index: 11;
  background: var(--base-bg);
  margin-left: -1.5em;
  width: calc(100% + 3em);
  padding: 0 1.5em;
`;

export const GridArea = styled.div`
  grid-area: ${props => props.name || 'unset'};
`;
