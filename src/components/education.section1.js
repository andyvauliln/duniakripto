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

const news = [
	{
		id: 1,
		title: 'Dapper Labs Is Bringing Its NFTs to the NFL: Report',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 20000),
		views: 152,
		creator: 'Adamm Switch',
		comments: 14,
		tags: 'NFT, Sport',
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/X1E5vv94qtEHChrz0N5bzqMW_Sc=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/NYDXB7OXNJBYDMB5XXDFUCYYHE.jpeg'
	},
	{
		id: 2,
		title: 'Cinco razones por las que bitcoin se mantiene por debajo de $50.000',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 6000 * 5),
		views: 77,
		creator: 'Adamm Switch',
		tags: 'Bitcoin, Price',
		comments: 24,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/5lM5QI1Dx0TKOgJynCVDZ0b82_c=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/NKV5SNNMUFFFBDNNGAMR4FHZIA.jpg'
	},
	{
		id: 3,
		title: 'You Can Be a Bitcoin Maximalist and Like Ethereum, Too',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 12000 * 6),
		views: 100,
		creator: 'Adamm Switch',
		tags: 'Bitcoin, Ethereum',
		comments: 22,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/45wKPZ8KhVwlhiDx-7BjwzSWg-E=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/RJ4NOULPA5COPEW2NP3X5CQYDU.jpg'
	},
	{
		id: 4,
		title: 'Payment Network Affirm Will Allow Customers to Buy and Sell Crypto',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 18000 * 7),
		views: 88,
		creator: 'Adamm Switch',
		tags: 'Payments, Exchange',
		comments: 65,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/6gxgKezSbT1TZgQy1madYmPi3ZE=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/F7IT5KZDZZAORPO44KIOQ2HBQA.jpeg'
	},
	{
		id: 5,
		title: 'Thailand’s Tourism Authority Floats Idea of Utility Token to Attract Crypto Holders: Report',
		date: new Date(Date.now() - 25000 * 8),
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		views: 45,
		tags: 'Thailand, Utility Token',
		creator: 'Adamm Switch',
		comments: 12,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/nzymvT4kLedAGAg__PiC4gJipZo=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SFILQQGX7FHXDJXSO66FO74X34.jpg'
	},
	{
		id: 6,
		title: 'Dapper Labs Is Bringing Its NFTs to the NFL: Report',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 20000),
		views: 152,
		creator: 'Adamm Switch',
		comments: 14,
		tags: 'NFT, Sport',
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/X1E5vv94qtEHChrz0N5bzqMW_Sc=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/NYDXB7OXNJBYDMB5XXDFUCYYHE.jpeg'
	},
	{
		id: 7,
		title: 'Cinco razones por las que bitcoin se mantiene por debajo de $50.000',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 6000 * 5),
		views: 77,
		creator: 'Adamm Switch',
		tags: 'Bitcoin, Price',
		comments: 24,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/5lM5QI1Dx0TKOgJynCVDZ0b82_c=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/NKV5SNNMUFFFBDNNGAMR4FHZIA.jpg'
	},
	{
		id: 8,
		title: 'You Can Be a Bitcoin Maximalist and Like Ethereum, Too',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 12000 * 6),
		views: 100,
		creator: 'Adamm Switch',
		tags: 'Bitcoin, Ethereum',
		comments: 22,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/45wKPZ8KhVwlhiDx-7BjwzSWg-E=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/RJ4NOULPA5COPEW2NP3X5CQYDU.jpg'
	},
	{
		id: 9,
		title: 'Payment Network Affirm Will Allow Customers to Buy and Sell Crypto',
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		date: new Date(Date.now() - 18000 * 7),
		views: 88,
		creator: 'Adamm Switch',
		tags: 'Payments, Exchange',
		comments: 65,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/6gxgKezSbT1TZgQy1madYmPi3ZE=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/F7IT5KZDZZAORPO44KIOQ2HBQA.jpeg'
	},
	{
		id: 10,
		title: 'Thailand’s Tourism Authority Floats Idea of Utility Token to Attract Crypto Holders: Report',
		date: new Date(Date.now() - 25000 * 8),
		description:
			'In this episode, Timofey from Russia talks about how his grandmother became a crypto film producer, Brain from Nigeria tells the sad story of his uncle who lost access to his crypto wallet, and Jack from ',
		views: 45,
		tags: 'Thailand, Utility Token',
		creator: 'Adamm Switch',
		comments: 12,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/nzymvT4kLedAGAg__PiC4gJipZo=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SFILQQGX7FHXDJXSO66FO74X34.jpg'
	}
];

const tags = ['All', 'Games', 'Regulations', 'Hacks', 'NFT', 'Tech Update', 'Statistics', 'New Projecs', 'Analitics'];

export default function Section1() {
	const [state, setState] = useState('latest');
	const [filter, setFilter] = useState('All');
	let collection = state === 'latest' ? news : news.reverse();
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
						width="8em"
					>
						<TextView>Text</TextView>
						<ToggleButton both={true} checked={state !== 'latest'} />
						<TextView>Video</TextView>
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

									<Metadata>
										<p>
											<TextView color="var(--label-color)" fsize="md">
												{r.description}
											</TextView>
										</p>
									</Metadata>
									<FlexRow justifyContent="flex-end" py="1em">
										{r.tags.split(',').map(item => (
											<Tag color="#fff" tprops={{ mt: '0.5em', ml: '0.5em' }} name={item} fsize="sm" />
										))}
									</FlexRow>
									<FlexRowSpaceBetween>
										<TimeAgo style={{ color: 'var(--link-color)' }} datetime={r.date} />
										<Box>
											<TextView>{r.views}</TextView>
											<Icons fsize="sm" type="views" />
										</Box>
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
// <ItemWrapper>
//     <ItemImage src={r.src} />
//     <ItemInformation>
//         <Title>
//             <TextView>{r.title}</TextView>
//         </Title>
//         <Metadata>
//             <TimeAgo style={{ color: 'var(--link-color)' }} datetime={r.date} />
//             <Box>
//                 <TextView>{r.views}</TextView>
//                 <Icons fsize="sm" type="views" />
//             </Box>
//         </Metadata>
//     </ItemInformation>
// </ItemWrapper>

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
	&:hover {
		/* background: #000; */
		opacity: 0.7;
		border: 1px solid var(--divider-color);
		box-shadow: 4px 16px 14px rgb(16 16 16 / 80%);
	}
`;

const Metadata = styled(FlexRowSpaceBetween)`
	flex: 1;
	align-self: stretch;
`;
const ItemImage = styled.img`
	height: 100%;
	width: 100%;
	max-width: 15em;
`;
const ItemInformation = styled(FlexColumn)`
	flex: 1;
	align-self: stretch;
	padding: 0em 2em;
`;
