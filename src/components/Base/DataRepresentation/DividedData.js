import { h } from 'preact';
import styled from 'styled-components';
import { isArray } from 'tz-utils';
import DataView from './DataView';

const DividedData = ({ data, divider = ' / ', suffix, ...props }) => {
	if (!isArray(data)) {
		return <DataView {...props}>{data}</DataView>;
	}
	return (
		<Wrapper>
			<span>
				{data.map((item, index) => (
					<WrappedDataView key={index} d={divider} {...props}>
						{item}
					</WrappedDataView>
				))}
			</span>
			{suffix ? <DataView pl=".25em">{suffix}</DataView> : ''}
		</Wrapper>
	);
};

const Wrapper = styled.span`
	align-items: flex-end;
	text-align: right;
`;

const WrappedDataView = styled(DataView)`
  &:not(:last-child):after {
    content: '${props => props.d}' !important;
    color: inherit;
  }
`;

export default DividedData;
