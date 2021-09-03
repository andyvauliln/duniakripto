import React from 'react';
import styled from 'styled-components';
import { DataView, FlexRow, LinkView } from 'tz-base';
import BWLogo from 'tz-base/Svg/BlockwatchLogo';
import { ENV } from 'tz-config';

const Footer = () => {
	return (
		<Wrapper as="footer">
			<FlexRow mx="auto" chStyles="margin-right: 0.5em">
				<DataView fsize="sm" variant="label">
					tk_copyright
				</DataView>
				<a href="https://blockwatch.cc" alt="Blockwatch Data" target="_blank" rel="noopener noreferrer">
					<BWLogo mt=".1em" />
				</a>
				<DataView fsize="sm" variant="label">
					–
				</DataView>
				<DataView fsize="sm" variant="label">
					tk_footer_contact_us
				</DataView>
				<LinkView fsize="sm" extern to="https://twitter.com/tzstats" v="Twitter" />
				<DataView fsize="sm" variant="label">
					tk_or
				</DataView>
				<LinkView fsize="sm" extern to="https://discord.gg/D5e98Hw" v="Discord" />
				<DataView fsize="sm" variant="label">
					–
				</DataView>
				<LinkView mr="2em" extern fsize="sm" to="https://tzstats.com/blog" v="tk_blog" />
				<DataView fsize="sm" variant="label">
					–
				</DataView>
				<LinkView mr="2em" fsize="sm" to="/terms" v="tk_terms" />
				<DataView fsize="sm" variant="label">
					–
				</DataView>
				<LinkView fsize="sm" to="/privacy" v="tk_privacy" />
				<DataView fsize="sm" ml="0.5" variant="label">{`version: ${ENV.TZSTATS_VERSION}`}</DataView>
			</FlexRow>
		</Wrapper>
	);
};
const Wrapper = styled(FlexRow)`
	width: 100%;
`;

export default Footer;
