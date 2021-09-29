import styled from 'styled-components';
import { flexbox, color, layout, position, space, textAlign, grid } from 'styled-system';

export const Box = styled.div`
  ${grid}
  ${space}
  ${color}
  ${flexbox}
  ${textAlign}
  ${position}
  ${layout}
  background: ${props => (props.bg ? props.bg : 'none')};
  > * {
    ${props => props.chStyles};
  }
`;

export const FlexRow = styled(Box)`
	display: flex;
	flex-direction: row;
	position: relative;
`;

export const FlexColumn = styled(Box)`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const MarginedBox = styled(FlexColumn)`
	& > div {
		margin-bottom: 1em;
	}
`;

export const FlexColumnCenter = styled(FlexColumn)`
	justify-content: center;
`;

export const FlexColumnSpaceBetween = styled(FlexColumn)`
	justify-content: space-between;
`;

export const FlexColumnSpaceAround = styled(FlexColumn)`
	justify-content: space-around;
`;

export const FlexRowWrap = styled(FlexRow)`
	flex-wrap: wrap;
`;

export const FlexColumnWrap = styled(FlexColumn)`
	flex-wrap: wrap;
`;

export const FlexRowCenter = styled(FlexRow)`
	align-items: center;
`;

export const FlexRowSpaceBetween = styled(FlexRowCenter)`
	justify-content: space-between;
`;

export const FlexRowSpaceAround = styled(FlexRowCenter)`
	justify-content: space-around;
`;
