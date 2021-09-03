import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { space } from 'styled-system';

const SidebarCard = ({ children, to, ...props }) => {
  return to ? (
    <Link to={to}>
      <Card {...props}>{children}</Card>
    </Link>
  ) : (
    <Card {...props}>{children}</Card>
  );
};

const Card = styled.div`
  ${space}
  padding-right: 0.5em;
  padding-left: 0.5em;
  padding-top: 0;
  padding-bottom: 1.5em;
  width: 100%;
  color: var(--dark-label-color);
  text-align: center;

  &:hover {
    color: var(--dark-link-color);
  }
`;

export default SidebarCard;
