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

export default function Section5() {
	return (
		<Fragment>
			<HeaderWrapper>
				<LinkView tp="nav" fweight="900" fsize="lgt" href="/#market">
					Market Data
				</LinkView>
			</HeaderWrapper>

			<Section1Wrapper className="homepage">
				<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js" />
				<div
					class="coinmarketcap-currency-widget "
					data-currencyid="1"
					data-base="IDR"
					data-secondary=""
					data-ticker="true"
					data-rank="false"
					data-marketcap="false"
					data-volume="true"
					data-statsticker="true"
					data-stats="IDR"
				/>
				<div
					class="coinmarketcap-currency-widget home"
					data-currencyid="12"
					data-base="IDR"
					data-secondary=""
					data-ticker="true"
					data-rank="false"
					data-marketcap="false"
					data-volume="true"
					data-statsticker="true"
					data-stats="IDR"
				/>
				<div
					class="coinmarketcap-currency-widget home"
					data-currencyid="13"
					data-base="IDR"
					data-secondary=""
					data-ticker="true"
					data-rank="false"
					data-marketcap="false"
					data-volume="true"
					data-statsticker="true"
					data-stats="IDR"
				/>
				<div
					class="coinmarketcap-currency-widget home"
					data-currencyid="14"
					data-base="IDR"
					data-secondary=""
					data-ticker="true"
					data-rank="false"
					data-marketcap="false"
					data-volume="true"
					data-statsticker="true"
					data-stats="IDR"
				/>
				<div
					class="coinmarketcap-currency-widget home"
					data-currencyid="15"
					data-base="IDR"
					data-secondary=""
					data-ticker="true"
					data-rank="false"
					data-marketcap="false"
					data-volume="true"
					data-statsticker="true"
					data-stats="IDR"
				/>
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
	top: 20em;
	z-index: 1000;
	display: flex;
	flex-direction: row;
	text-transform: uppercase;
	justify-content: space-between;
	align-items: center;
	padding: 0 2em;
	@media (max-width: 800px) {
		padding: 1em;
		top: 22em;
	}
`;
const Section1Wrapper = styled(FlexRowSpaceBetween)`
	width: 100%;
	padding: 1em;
	height: 100%;
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
