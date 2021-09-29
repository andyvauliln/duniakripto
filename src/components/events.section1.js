import { h } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import { Fragment } from 'reactn';
import LinkView from './linkView';
import { FlexColumn, FlexRow, Box, FlexRowSpaceBetween } from './flexBoxes';
import TextView from './textView';
import TimeAgo from 'timeago-react';
import Icons from './icons';
import ToggleButton from './toggleButton';
import Tag from './tag';
import Divider from './divider';

const events = [
	{
		id: 1,
		title: 'DecentralHacks 2021 | The Road to Metamorphosis 3.0',
		description:
			'Rakbank, Dubai International Financial Center (DIFC), SmartStream, Network International, Backbase, Abaka, SmartMessage, Confluent, Appway, IDS Fintech, Creatio, Smart Middle East and Faloos were well-represented at the third annual edition of Finnovex Middle East to champion the conversation on what the future holds for the banking and financial sector in the Middle Eastern region.',
		date: new Date(Date.now() + 1000000000 * 1),
		location: 'Dubai, Markar Dala',
		tags: 'Hackathons, Technology Events',
		src:
			'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zNjdkNDNjNjE4NTQ4MzAzZjhhNzZjMWJlNjA5MjIzZS5qcGc=.jpg'
	},
	{
		id: 2,
		title: 'The MarTech Summit London',
		description:
			'The two-day premier crypto event announced in Dubai met with huge expectations among crypto enthusiasts in the region and will host a potential conference that provides valuable insights into the crypto industry by executives and personalities. ',
		date: new Date(Date.now() + 1000000000 * 2),
		location: 'Indonesia, Jakarta',
		tags: 'Finance, Crypto',
		src:
			'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8xNTk5YzQzY2U1MDQ4OTljZTU1NTMyZjg3NzdmMmE3OC5qcGc=.jpg'
	},
	{
		id: 3,
		title: 'Digging deeper into resilient and agile transformation strategies',
		description:
			'Irvine, California, Sept. 15, 2021 — Community is at the core of some of the most successful projects in crypto and blockchain technology. From the founding developers and early investors who start the project to influencers and fans who help with funding and exposure, these people make up a project’s community.',
		date: new Date(Date.now() + 1000000000 * 3),
		location: 'Indonesia, Jakarta',
		tags: 'Bitcoin, Tech, Meetup',
		src:
			'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9mMjBlZTY4ODU0OWVjZWQyOTJmOTM1NTFlN2YxMzI1OC5qcGc=.jpg'
	},
	{
		id: 4,
		title: 'Largest crypto expo in Dubai looks to attract over 3,000 visitors',
		description:
			'The tech space is rapidly expanding. Cutting-edge technologies such as artificial intelligence, machine learning and the Internet of Things are breaking new ground with innovative use cases, and the world is gradually beginning to accept the idea that digital resources can have real-world utility.',
		date: new Date(Date.now() + 1000000000 * 4),
		location: 'Indonesia, Bali',
		tags: 'Payments, Exchange, Conference',
		src:
			'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9mMDhmMWNhYTMxN2M2MTBmNDU1NjdmZWEyOTgyZjVkNS5KUEc=.jpg'
	},
	{
		id: 5,
		title: 'Crowdcreate launches CryptoCom conference to connect the crypto community',
		date: new Date(Date.now() + 1000000000 * 5),
		description:
			' Sanctor Capital, a blockchain-focused investment firm that brings together missionary founders and successful entrepreneurs, announced today that it will be hosting its first demo day to showcase the inaugural cohort of projects graduating from its custom-tailored mentorship program, Sanctor Turbo. Project teams graduating as Sanctor Turbo’s alpha class were hand-selected by domain experts from industry-leading organizations such as Coinbase, Cointelegraph, Solana, The Sandbox and many more',
		location: 'England, London',
		tags: 'Hacks, Meetup',
		src:
			'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85NTI2M2NiODA1MmE5OWQyMDFkNDMyNGY2YThjOTU1Mi5qcGc=.jpg'
	}
];

const tags = ['All', 'Hackaton', 'Meetup', 'Conference', 'Online', 'Finance', 'Tech', 'Trading'];

export default function Section1() {
	const [state, setState] = useState('latest');
	const [filter, setFilter] = useState('All');
	let collection = state === 'latest' ? events : events.reverse();
	return (
		<Fragment>
			<HeaderWrapper>
				<FlexRowSpaceBetween flex="5">
					<Box flex="1.3">
						<input style={{ width: '100%' }} type="text" placeholder="Search" />
					</Box>
					<FilterWrapper flex="2.5">
						{tags.map(r => (
							<FilterButton onClick={e => setFilter(r)} active={r.indexOf(filter) >= 0}>
								{r}
							</FilterButton>
						))}
					</FilterWrapper>

					<LanguageWrapper
						ml="2em"
						onClick={e => {
							state === 'latest' ? setState('hottest') : setState('latest');
							e.stopPropagation();
							e.preventDefault();
							return false;
						}}
						width="11em"
					>
						<TextView>Global</TextView>
						<ToggleButton both={true} checked={state !== 'latest'} />
						<TextView>Local</TextView>
					</LanguageWrapper>
				</FlexRowSpaceBetween>
			</HeaderWrapper>

			<Section1Wrapper>
				{collection.map(r => (
					<Fragment>
						<LinkView key={r.id}>
							<ItemWrapper>
								<ItemImage src={r.src} />
								<ItemInformation>
									<TextView fsize="lgt" fweight="600">
										{r.title}
									</TextView>
									<FlexRow justifyContent="flex-start">
										{r.tags.split(',').map(item => (
											<Tag color="var(--label-color)" tprops={{ mt: '0.5em', ml: '0.5em' }} name={item} fsize="sm" />
										))}
									</FlexRow>
									<Metadata>
										<p>
											<TextView color="var(--label-color)" fsize="md">
												{r.description}
											</TextView>
										</p>
									</Metadata>
									<FlexRowSpaceBetween>
										<TextView color="var(--link-color)" fweight="600">
											{r.location}
										</TextView>
										<TextView mt="0.5em" color="var(--text-color)" fweight="900">
											{r.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
										</TextView>
									</FlexRowSpaceBetween>
								</ItemInformation>
							</ItemWrapper>
						</LinkView>
					</Fragment>
				))}
			</Section1Wrapper>
		</Fragment>
	);
}

const FilterButton = styled.button`
	color: ${props => (props.active ? 'var(--link-color)' : 'var(--label-color)')};
	border: ${props => (props.active ? '1px solid var(--link-color)' : '1px solid var(--outline-color)')};
`;

const FilterWrapper = styled(FlexRowSpaceBetween)`
	> * {
		margin-left: 1em;
	}
`;

const LanguageWrapper = styled(FlexRowSpaceBetween)``;
const HeaderWrapper = styled(FlexRowSpaceBetween)`
	background: var(--nav-bg);
	box-shadow: 4px 2px 14px rgb(16 16 16 / 80%);
	/* border-bottom: 1px solid var(--divider-color); */
	position: sticky;
	height: 4em;
	top: 4em;
	z-index: 1000;
	display: flex;
	text-transform: uppercase;
	align-items: center;
	padding: 1em 2em;

	@media (max-width: 800px) {
		padding: 1em;
		top: 10em;
	}
`;
const Section1Wrapper = styled(FlexColumn)`
	width: 100%;
	padding: 1em;
	flex: 1;
`;
const ItemWrapper = styled(FlexRowSpaceBetween)`
	width: 100%;
	margin: auto;
	max-width: 67em;
	padding: 1em;
	flex: 1;
	align-self: stretch;
	border-bottom: 1px solid var(--divider-color);
	&:hover {
		/* background: #000; */
		opacity: 0.7;
		/* border: 1px solid var(--divider-color); */
		/* box-shadow: 4px 16px 14px rgb(16 16 16 / 80%); */
	}
`;

const Metadata = styled(FlexRowSpaceBetween)`
	flex: 1;
	align-self: stretch;
`;
const ItemImage = styled.img`
	height: 100%;
	width: 100%;
	max-width: 18em;
	margin-right: 2em;
	display: flex;
	align-self: baseline;
`;
const ItemInformation = styled(FlexColumn)`
	flex: 1;
	align-self: stretch;
`;
