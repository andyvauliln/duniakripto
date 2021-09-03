import React from 'react';
import styled from 'styled-components';
import { FEATURES } from 'tz-config';
import dataService from 'tz-model/data-service';
import DataView from '../DataRepresentation/DataView';
import { LinkView } from '../DataRepresentation/LabelValueView';
import Sellector from './Sellector';

const NetworkSellector = () => {
  const current = FEATURES.networks.filter(item => item.name === dataService.config.network)[0];
  return <Sellector items={FEATURES.networks} item={current} Template={NetworkTemlate} />;
};

const NetworkTemlate = ({ data, isActive }) => {
  return isActive ? (
    <ListItem>
      <LinkView className="list-item" extern to={data.link} v={data.name} />
    </ListItem>
  ) : (
    <DataView my="0.3em" pointer variant="label" transform="capitalize" onClick={() => window.open(data.link, '_blank')}>
      {data.name}
    </DataView>
  );
};

const ListItem = styled.li`
  padding: 0.5em 1em;
  cursor: pointer;
  &:hover {
    background-color: var(--nav-highlight-bg);
    color: var(--nav-highlight-text);
  }
`;

export default NetworkSellector;
