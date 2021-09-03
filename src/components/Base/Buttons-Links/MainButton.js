import React from 'reactn';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import theme from 'styled-theming';
import { DataView } from 'tz-base';

const MainButton = ({ handleClick, children, ...props }) => {
  const onClick = e => {
    e.stopPropagation();
    handleClick();
  };
  return (
    <Button type="button" {...props} onClick={e => onClick(e)}>
      <DataView variant="inherit">{children}</DataView>
    </Button>
  );
};

const buttonStyles = theme.variants('mode', 'mode', {
  active: {
    light: css`
      color: var(--link-color);
      border: 1px solid var(--outline-color);
      background: var(--button-active-bg);
    `,
    dark: css`
      color: var(--link-color);
      border: 1px solid var(--outline-color);
      background: var(--button-active-bg);
    `,
    solardark: css`
      color: var(--link-color);
      border: 1px solid var(--outline-color);
      background: var(--button-active-bg);
    `,
  },
  grey: {
    light: css`
      &:hover {
        color: var(--text-color);
        background: var(--dim-color);
        border: 1px solid var(--outline-color);
      }
    `,
    dark: css`
      &:hover {
        color: var(--text-color);
        background: var(--button-active-bg);
        border: 1px solid var(--outline-color);
      }
    `,
    solardark: css`
      &:hover {
        color: var(--text-color);
        background: var(--button-active-bg);
        border: 1px solid var(--outline-color);
      }
    `,
  },
  blue: {
    light: css`
      color: var(--white);
      border: 1px solid var(--link-color);
      background: var(--link-color);
    `,
    dark: css`
      color: var(--white);
      border: 1px solid var(--link-color);
      background: var(--link-color);
    `,
    solardark: css`
      color: var(--white);
      border: 1px solid var(--link-color);
      background: var(--link-color);
    `,
  },
});

const Button = styled.button`
  ${props => {
    props.mode = props.mode || 'mono';
    return '';
  }}
  padding: 0.5em 1.5em;
  cursor: pointer;
  text-align: center;
  width: ${props => props.bwidth || 'auto'};
  border-radius: 0.25rem;
  background: var(--button-bg);
  color: var(--text-color);
  border: 1px solid var(--outline-color);
  &:hover {
    color: var(--link-color);
    border: 1px solid var(--link-color);
    background: var(--button-hover-bg);
  }
  ${buttonStyles}
  ${space}
`;

export default MainButton;
