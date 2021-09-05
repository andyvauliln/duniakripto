import { h } from 'preact';
//import Error404 from '../../Errors/Error404';
import Centered from '../Layout/Centered';
import DataView from './DataView';

export default function ErrorMessage({ error }) {
	if (!error) {
		return null;
	}
	switch (error.status) {
		// case 404:
		// 	return <Error404 />;

		default:
			return (
				<Centered p="2em">
					<DataView variant="label">{error.message}</DataView>
				</Centered>
			);
	}
}
