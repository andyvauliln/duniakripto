import React from 'react';
import styled from 'styled-components';
import { DataView, FlexRowSpaceBetween, Icons, LinkedText } from 'tz-base';

const ArrowNavigation = ({ prevCond, prevLink, value, nextCond, nextLink, sticky }) => {
  return (
    <Wrapper sticky={sticky} className="sticky-header">
      <FlexRowSpaceBetween py=".5em">
        {prevCond ? (
          <LinkedText variant="button" to={prevLink}>
            <Icons fsize="xxl" type="<<" />
          </LinkedText>
        ) : (
          <Icons fsize="xxl" variant="inactive" type="<<" />
        )}
        <DataView fsize="slg" fweight="500" variant="h2">
          {value}
        </DataView>
        {nextCond ? (
          <LinkedText variant="button" to={nextLink}>
            <Icons fsize="xxl" type=">>" />
          </LinkedText>
        ) : (
          <Icons fsize="xxl" variant="inactive" type=">>" />
        )}
      </FlexRowSpaceBetween>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: ${props => (props.sticky ? 'sticky' : 'static')};
  top: 3rem;
  z-index: 10;
  width: 100%;
  width: calc(100% + 20px);
  margin-left: -10px;
  margin-right: 10px;
  padding: 0 10px;
  background-color: var(--base-bg);
`;
export default ArrowNavigation;
