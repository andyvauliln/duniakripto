import { h } from 'preact';
//import { Link } from 'preact-router/match';
import styled from 'styled-components';
import { FlexColumn, Box, FlexRow, FlexRowSpaceAround, FlexRowSpaceBetween } from './flexBoxes';
import Divider from './divider';
//import LinkView from './linkView';
import TextView from './textView';
import TitleView from './titleView';
import LinkView from './linkView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
	return (
		<FooterWrapper>
			<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css" />
			<FooterNav>
				<Box flex="3" mr="2em">
					<TitleView as="h2">tk_about_us</TitleView>
					<p>
						<About>tk_about_us_text</About>
					</p>
				</Box>
				<FlexRowSpaceAround flex="2">
					<FlexColumn flex="1" alignSelf="stretch">
						<TitleView mb="1em" as="h2">
							tk_links
						</TitleView>
						<LinkView href="http://scanfcode.com/category/front-end-development/">tk_use_terms</LinkView>
						<LinkView href="http://scanfcode.com/category/front-end-development/">tk_privacy</LinkView>
					</FlexColumn>
					<FlexColumn flex="1" alignSelf="stretch">
						<TitleView mb="1em" as="h2">
							tk_contacts
						</TitleView>
						<FlexRowSpaceBetween>
							<TextView style={{ lineHeight: 1.7 }} color="var(--label-color)">
								tk_phone
							</TextView>
							<TextView>+62523562265</TextView>
						</FlexRowSpaceBetween>
						<FlexRowSpaceBetween>
							<TextView style={{ lineHeight: 1.7 }} color="var(--label-color)">
								tk_email
							</TextView>
							<TextView>contact@duniakriptio.com</TextView>
						</FlexRowSpaceBetween>
						<FlexRowSpaceBetween>
							<TextView style={{ lineHeight: 1.7 }} color="var(--label-color)">
								tk_address
							</TextView>
							<LinkView href="http://scanfcode.com/category/front-end-development/">Indonesia, Bali, gg Indra n 9</LinkView>
						</FlexRowSpaceBetween>
					</FlexColumn>
				</FlexRowSpaceAround>
			</FooterNav>
			<Divider my="1em" />
			<FlexRowSpaceBetween>
				<Box>
					<TextView style={{ opacity: 0.7 }}>&copy;</TextView>
					<TextView style={{ opacity: 0.7 }}>tk_copiraite</TextView>
					<LinkView fsize="lgt" tp="nav" ml="0.3em" href="#">
						Duniakripto.
					</LinkView>
				</Box>
				<FlexRowSpaceBetween>
					<SocialMedia>
						<LinkView tp="nav" href="/information">
							<FontAwesomeIcon size="lg" icon={['fab', 'telegram']} />
						</LinkView>
						<LinkView tp="nav" href="/information">
							<FontAwesomeIcon size="lg" icon={['fab', 'whatsapp']} />
						</LinkView>
						<LinkView tp="nav" href="/information">
							<FontAwesomeIcon size="lg" icon={['fab', 'youtube']} />
						</LinkView>
						<LinkView tp="nav" href="/information">
							<FontAwesomeIcon size="lg" icon={['fab', 'instagram']} />
						</LinkView>
					</SocialMedia>
				</FlexRowSpaceBetween>
			</FlexRowSpaceBetween>
		</FooterWrapper>
	);
}

const SocialMedia = styled(Box)`
	justify-content: center;
	> *:not(:last-child) {
		margin-right: 1em;
	}
`;

const About = styled(TextView)`
	font-family: 'Dosis';
	opacity: 0.7;
	font-size: 19px;
`;

const FooterWrapper = styled.footer`
	box-shadow: 0 0 14px rgb(16 16 16 / 80%);
	background-color: var(--nav-bg);
	padding: 2em 2em;
	display: flex;
	flex-direction: column;
`;

const FooterNav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 800px) {
		flex-direction: column;
		> *:not(:last-child) {
			margin-bottom: 1em;
		}
	}
`;
