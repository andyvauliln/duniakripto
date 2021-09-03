import React from 'react';
import styled from 'styled-components';
import { H3 } from '../DataRepresentation/LabelValueView';
import { BorderedBox } from './FlexBoxes';
import { isDefined } from 'tz-utils';

const DataCard = ({ textAlign = 'left', children, title, ...props }) => {
  return (
    <>
      {typeof title === 'string' ? <H3 block textAlign={textAlign} k={title} /> : title}
      <Wrapper {...props}>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled(BorderedBox)`
  margin-bottom: ${props => (isDefined(props.mb) ? props.mb : '1em')};
`;

export default DataCard;
