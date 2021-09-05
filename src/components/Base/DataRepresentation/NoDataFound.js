import { h } from 'preact';
import Centered from '../Layout/Centered';
import DataView from './DataView';

export default function NoDataFound() {
	return (
		<Centered p="2em">
			<DataView variant="label">tk_no_data_found</DataView>
		</Centered>
	);
}
