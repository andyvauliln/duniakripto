import { ErrorBoundary } from 'components/Errors';
import React, { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled, { css } from 'styled-components';
import { DataView, FlexColumn } from 'tz-base';
import { isString } from 'tz-utils';

const DeviceTabs = ({ list, usenav, ...props }) => {
  const history = useHistory();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [pos, setPos] = useState(-1);
  const ref = useRef();

  const toggleItem = (index, e) => {
    const same = activeIndex === index;
    // don't scroll if current scroll pos is < pos
    if (window.pageYOffset > pos) {
      window.scrollTo({ left: 0, top: pos, behavior: same ? 'smooth' : 'auto' });
    }
    setActiveIndex(index);
    if (usenav && (location.hash || '').slice(1) !== list[index].title) {
      // Note: changing location hash will always scroll top!
      history.push({ ...location, hash: list[index].title });
    }
  };

  React.useLayoutEffect(() => {
    // use current page position
    const offset = ref.current.getBoundingClientRect().y;
    // subtract height of all sticky elements before (nav header, page headers, grid gap)
    // the way we achieve this is to read the top property which we set using the sticky
    // argument, but since we use em units, we have to ask the browser to translate this
    // into pixels
    const top = parseInt(window.getComputedStyle(ref.current).getPropertyValue('top'));
    setPos(offset - top);
  }, []);

  React.useEffect(() => {
    const hash = (location.hash || '').slice(1);
    const navIndex = list.findIndex(e => e.title === hash);
    switch (true) {
      case usenav && hash && navIndex === -1:
        history.replace({ ...location, hash: '' });
        setActiveIndex(0);
        break;
      case usenav && navIndex >= 0:
        setActiveIndex(navIndex);
        break;
      case activeIndex >= list.length:
        setActiveIndex(0);
    }
    // listen for route change events, cleanup on component unmount
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [usenav ? location : null]);

  return (
    <>
      <Tabs className="sticky-tabs" {...props} ref={ref}>
        <TabsWrapper>
          {list.map((item, index) => {
            return (
              <Tab key={index} isOpen={activeIndex === index} onClick={e => toggleItem(index, e)}>
                {isString(item.title) ? (
                  <DataView variant="inherit" i18d={item.i18d}>
                    {'tk_' + item.title}
                  </DataView>
                ) : (
                  item.title
                )}
              </Tab>
            );
          })}
        </TabsWrapper>
      </Tabs>

      {list.map((item, index) => {
        return (
          activeIndex === index && (
            <Content className="tabs-content" key={index} {...props}>
              <ErrorBoundary noborder>
                <React.Suspense fallback={<div>Loading...</div>}>{item.content}</React.Suspense>
              </ErrorBoundary>
            </Content>
          )
        );
      })}
    </>
  );
};

// bad-ass trick to avoid scroll position jumps when content is empty
// - we use a :before element hidden behind the content that fills
//   vertical space until the end and apply a negative top margin to the
//   content to move it upwards by the same amount
// - as height basis we use viewport height (100vh)
// - offset from top is calculated as:
//
//   title height (3em) + subtitle height (2.5em) + tab bar height (3em) + extra (?)
//
const Content = styled(FlexColumn)`
  background: ${props => (props.nobg ? 'transparent' : 'var(--card-bg)')};
  padding: ${props => (props.nopad ? '0' : '1em')};
  box-shadow: ${props => (props.nobg ? 'none' : 'var(--outer-shadow)')};
  margin-bottom: 1em;
  border-radius: 0 0 0.25rem 0.25rem;
  &:empty {
    margin-bottom: 100vh;
  }
  &:before {
    content: '';
    min-height: calc(100vh - 6em);
    z-index: -1;
    display: block;
  }
  & > :first-child {
    margin-top: calc(-100vh + 6em);
  }
  ${props =>
    props.sticky &&
    css`
      & .sub-header {
        top: calc(${props.sticky} + 6em);
        position: sticky;
      }
    `}
`;

// hide scrollbar but keep x-axis scrollable
export const TabsWrapper = styled.div`
  overflow-x: auto;
  padding-bottom: 10px;
  margin-bottom: -10px;
  box-sizing: content-box;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

// 2.5em is height of the main header
export const Tabs = styled.nav`
  overflow: hidden;
  position: ${props => props.sticky && 'sticky'};
  top: ${props => props.sticky && props.sticky};
  width: calc(100% + 2em);
  margin-left: -1em;
  padding: 0 1em;
  white-space: nowrap;
  z-index: 10;
  line-height: 0.8;
  background: var(--base-bg);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.span`
  display: inline-block;
  border-style: solid;
  overflow: auto;
  padding: 1em 1.5em;
  height: 3rem;
  background: var(--base-bg);
  border-width: 0 0 0.2em;
  border-color: transparent;
  cursor: pointer;
  font-weight: 500;
  color: var(--label-color);
  ${props =>
    props.isOpen &&
    css`
      color: inherit;
      border-color: var(--active-color);
    `}
`;

export default React.memo(DeviceTabs);
