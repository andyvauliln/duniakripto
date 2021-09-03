import React from 'react';
import { FEATURES } from 'tz-config';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, DataView, FlexColumn, Icons, Logo, SidebarCard } from 'tz-base';
import CycleCtrl from './CycleCtrl';
import PriceCtrl from './PriceCtrl';
import ds from 'tz-model/data-service';

var menuKeys = ['activity', 'bakers', 'protocols', 'governance'];
if (FEATURES.hasMarket) {
  menuKeys.push('markets');
}

const SideBar = () => {
  return (
    <Wrapper as="nav">
      <LogoWrapper to="/">
        <Logo width="4em" height="3em" />
      </LogoWrapper>
      <SidebarCard>
        <DataView variant="dark-label" fsize="sm">
          {ds.tip.network.split('(')[0]}
        </DataView>
      </SidebarCard>
      <CycleCtrl />
      <Box flex="3">
        {menuKeys.map((item, index) => {
          return (
            <SidebarCard key={index} to={`/${item}`}>
              <Icons display="block" variant="inherit" mx="auto" mb="0.5em" type={item} fsize="slg" />
              <DataView variant="inherit" fsize="sm">
                {'tk_' + item}
              </DataView>
            </SidebarCard>
          );
        })}
        <PriceCtrl />
      </Box>

      <SettingsWrapper to={'/settings'}>
        <Icons display="block" variant="inherit" mx="auto" mb="0.5em" type="settings" fsize="slg" />
        <DataView variant="inherit" className="menu-text" fsize="sm">
          tk_settings
        </DataView>
      </SettingsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(FlexColumn)`
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  width: 6em;
  position: fixed;
  z-index: 30;
  box-shadow: 0 5em 5px 2px var(--shadow-color);
  justify-content: flex-start;
  background-color: var(--dark-nav-bg);
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LogoWrapper = styled(Link)`
  margin: 1em auto 0;
  color: var(--dark-label-color);
  &:hover {
    color: var(--white);
  }
`;

const SettingsWrapper = styled(Link)`
  position: relative:
  padding: 0.5em;
  margin-bottom: 1em;
  text-align: center;
  color: var(--dark-label-color);
  &:hover {
    color: var(--link-color);
  }
`;

export default SideBar;
