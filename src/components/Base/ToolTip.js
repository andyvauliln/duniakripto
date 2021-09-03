import React from 'react';
import styled from 'styled-components';
import DataView from './DataRepresentation/DataView';

const ToolTip = ({ children, type, text, ...props }) => {
  return (
    <Wrapper>
      {children}
      {tooltipTemplate(type, text, props)}
    </Wrapper>
  );
};
const tooltipTemplate = function (type, text, props) {
  switch (type) {
    case 'replace':
      return (
        <ReplaceTooltip nowrap {...props}>
          {text}
        </ReplaceTooltip>
      );
    case 'top':
      return (
        <TopTooltip nowrap {...props}>
          {text}
        </TopTooltip>
      );
    default:
      return <BaseTemplate {...props}>{text}</BaseTemplate>;
  }
};
const Wrapper = styled('div')({
  position: 'relative',
  ':hover span': {
    visibility: 'visible',
  },
});
const BaseTemplate = styled(DataView)`
  visibility: hidden;
  z-index: 1;
  position: absolute;
`;

const ReplaceTooltip = styled(BaseTemplate)`
  background-color: transparent;
  bottom: 1em;
  right: 0;
  text-align: right;
`;

const TopTooltip = styled(BaseTemplate)`
  background-color: transparent;
  top: -1.5em;
  left: -100%;
  z-index: 1000;
  color: var(--label-color);
`;

export default ToolTip;
