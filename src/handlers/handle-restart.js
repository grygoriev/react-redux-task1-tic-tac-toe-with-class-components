import { createEmptyField } from '../utils';
import { STATUS, PLAYER } from '../constants';
import { store } from '../store';

export const handleRestart = () => {
	store.dispatch({ type: 'SET_STATUS', payload: STATUS.TURN });
	store.dispatch({
		type: 'SET_CURRENT_PLAYER',
		payload: PLAYER.CROSS,
	});
	store.dispatch({ type: 'SET_FIELD', payload: createEmptyField() });
};
