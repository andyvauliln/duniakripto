import { h } from 'preact';
import Centered from './Layout/Centered';
import Spinner from './Spinner';

export default function Loading(message) {
	return (
		<Centered p="2em">
			<Spinner />
		</Centered>
	);
}
