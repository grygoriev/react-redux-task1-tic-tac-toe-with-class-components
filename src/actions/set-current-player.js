import { PLAYER } from '../constants';

export const setCurrentPlayer = (currentPlayer) => ({
	type: 'SET_CURRENT_PLAYER',
	payload: currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
});
