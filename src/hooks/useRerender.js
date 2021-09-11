import { h } from 'preact';
import { useReducer } from 'preact/hooks';

export default function useRerender() {
	return useReducer(() => ({}))[1];
}
