import { h } from 'preact';

export default function useRerender() {
	return React.useReducer(() => ({}))[1];
}
