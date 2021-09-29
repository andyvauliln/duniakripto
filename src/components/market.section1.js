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

const tags = ['BTC', 'LTC', 'NMC', 'TRC', 'PPC'];

export default function Section1() {
	return tags.map((r, index) => (
		<Fragment>
			{/* <HeaderWrapper index={index + 1}>
				<LinkView tp="nav" fweight="900" fsize="lgt" href="/#btc">
					{r}
				</LinkView>
			</HeaderWrapper> */}
			<FlexRowSpaceBetween bg="#23252d" className="marketpage">
				<iframe
					src={`https://lunarcrush.com/widgets/candlestick?key=dskv6oao9su8s14vsni1rp&symbol=${r}&interval=1 Week&animation=false&theme=dark`}
					id="candlestick"
					frameBorder="0"
					border="0"
					cellspacing="0"
					scrolling="no"
					style="width: 100%; height: 450px;"
				/>
				<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js" />
				<div
					class="coinmarketcap-currency-widget"
					data-currencyid={index + 1}
					data-base="IDR"
					data-secondary=""
					data-ticker="true"
					data-rank="false"
					data-marketcap="true"
					data-volume="true"
					data-statsticker="true"
					data-stats="IDR"
				/>
			</FlexRowSpaceBetween>
		</Fragment>
	));
}

const HeaderWrapper = styled(FlexRowSpaceBetween)`
	background: var(--nav-bg);
	/* box-shadow: 4px 2px 14px rgb(16 16 16 / 80%); */
	border-bottom: 1px solid var(--divider-color);
	position: sticky;
	top: ${props => props.index * 4}em;
	height: 4em;
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
// const Section1Wrapper = styled(FlexColumn)`
// 	width: 100%;
// 	padding: 1em;
// 	flex: 1;
// `;
