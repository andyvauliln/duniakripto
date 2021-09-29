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
		description: 'Interviews with former and current employees shine new light on the crypto exchange’s complicated relationship with its home country.',
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
		description: 'Interviews with former and current employees shine new light on the crypto exchange’s complicated relationship with its home country.',
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
		description: 'Interviews with former and current employees shine new light on the crypto exchange’s complicated relationship with its home country.',
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
		description: 'Interviews with former and current employees shine new light on the crypto exchange’s complicated relationship with its home country.',
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
		description: 'Interviews with former and current employees shine new light on the crypto exchange’s complicated relationship with its home country.',
		views: 45,
		tags: 'Thailand, Utility Token',
		creator: 'Adamm Switch',
		comments: 12,
		src:
			'https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/nzymvT4kLedAGAg__PiC4gJipZo=/800x600/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SFILQQGX7FHXDJXSO66FO74X34.jpg'
	}
];

export default function Section1() {
	const [state, setState] = useState('latest');
	let collection = state === 'latest' ? news : news.reverse();
	return (
		<Fragment>
			<HeaderWrapper>
				<LinkView tp="nav" fweight="900" fsize="lgt" href="/#news">
					News
				</LinkView>
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
					<TextView>Last</TextView>
					<ToggleButton both={true} checked={state !== 'latest'} />
					<TextView>Hot</TextView>
				</LanguageWrapper>
			</HeaderWrapper>

			<Section1Wrapper>
				{collection.map(r => (
					<Fragment>
						<LinkView key={r.id}>
							<ItemWrapper>
								<ItemImage src={r.src} />
								<ItemCover>
									<Title>
										<TextView>{r.title}</TextView>
									</Title>
									<Metadata>
										<TimeAgo style={{ color: 'var(--link-color)' }} datetime={r.date} />
										<Box>
											<TextView>{r.views}</TextView>
											<Icons fsize="sm" type="views" />
										</Box>
									</Metadata>
								</ItemCover>
							</ItemWrapper>
							<FlexRow justifyContent="flex-end">
								{r.tags.split(',').map(item => (
									<Tag color="#fff" tprops={{ mt: '0.5em', ml: '0.5em' }} name={item} fsize="sm" />
								))}
							</FlexRow>
						</LinkView>
					</Fragment>
				))}
			</Section1Wrapper>
		</Fragment>
	);
}

const LanguageWrapper = styled(FlexRowSpaceBetween)``;
const HeaderWrapper = styled(FlexRowSpaceBetween)`
	background: var(--nav-bg);
	border-bottom: 1px solid var(--divider-color);
	position: sticky;
	height: 4em;
	top: 4em;
	z-index: 1000;
	display: flex;
	flex-direction: row;
	text-transform: uppercase;
	justify-content: space-between;
	align-items: center;
	padding: 0 2em;
	@media (max-width: 800px) {
		padding: 1em;
		top: 10em;
	}
`;
const Section1Wrapper = styled(FlexRowSpaceBetween)`
	width: 100%;
	padding: 1em;
	> *:not(:last-child) {
		margin-right: 1em;
	}
`;
const ItemWrapper = styled(FlexRow)`
	width: 100%;
`;

const Title = styled.div`
	padding: 0.5em 1em;
	font-weight: 900;
	background: #000;
	opacity: 0.7;
`;
const Metadata = styled(FlexRowSpaceBetween)`
	padding: 0.5em 1em;
	font-weight: 900;
	background: #000;
	opacity: 0.7;
`;
const ItemImage = styled.img`
	height: 100%
	width: 100%;
	
`;
const ItemCover = styled(FlexColumn)`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	border-radius: 5px;
	justify-content: space-between;
	&:hover {
		background: #000;
		opacity: 0.7;
		border: 1px solid var(--divider-color);
		box-shadow: 4px 16px 14px rgb(16 16 16 / 80%);
	}
`;
