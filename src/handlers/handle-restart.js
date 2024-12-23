import { createEmptyField } from '../utils';
import { STATUS, PLAYER } from '../constants';
import { setCurrentPlayer, setField, setStatus } from '../actions';

export const handleRestart = (dispatch) => {
	dispatch(setStatus(STATUS.TURN));
	dispatch(setCurrentPlayer(PLAYER.CROSS));
	dispatch(setField(createEmptyField()));
};
