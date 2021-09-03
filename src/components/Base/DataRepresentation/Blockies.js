import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { toDataUrl } from 'tz-services/blockies/blockies';

const Blockies = ({ hash, size = '1em', ...props }) => {
  return (
    <Wrapper size={size} {...props}>
      <img src={toDataUrl(hash || 'none')} alt={hash} />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  ${space}
  line-height: 0;
  width: ${prop => prop.size};
  height: ${prop => prop.size};
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
  }
`;
export default Blockies;
