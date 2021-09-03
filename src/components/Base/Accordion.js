import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, DataView, Divider, FlexRowSpaceBetween } from 'tz-base';

const Accordion = ({ list, indicator = false, isShowDivider = false, py = 0 }) => {
	const [isActiveItem, setActiveItem] = useState({});
	const toggleItem = index => {
		setActiveItem(prevState => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};

	return (
		<Wrapper>
			{list.map((item, index) => {
				const isOpen = isActiveItem[index];
				const title = 30 < item.title.name.length ? `${item.title.name.slice(0, 30)}...` : item.title.name;
				return (
					<Container key={index}>
						{!indicator ? (
							<Box onClick={e => toggleItem(index)}>{title}</Box>
						) : (
							<FlexRowSpaceBetween py={py} onClick={e => toggleItem(index)}>
								<DataView block {...item.title.props} variant={isOpen ? 'alert' : 'secondary'}>
									{title}
								</DataView>

								{isOpen ? (
									<DataView variant="alert" fsize="lg">
										&#8854;
									</DataView>
								) : (
									<DataView variant="secondary" fsize="lg">
										&#8853;
									</DataView>
								)}
							</FlexRowSpaceBetween>
						)}
						<Body isOpen={isOpen}>
							{isShowDivider && <Divider my="1em" />}
							{item.content}
							{isShowDivider && <Divider my="1em" />}
						</Body>
					</Container>
				);
			})}
		</Wrapper>
	);
};

const Body = styled.div`
	border-color: transparent;
	display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Container = styled.div`
	background-color: transparent;
`;

const Wrapper = styled.div`
	background-color: transparent;
	width: 100%;
`;

export default React.memo(Accordion);
