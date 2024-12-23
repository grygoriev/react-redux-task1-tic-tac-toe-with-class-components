import { checkWin, checkEmptyCell } from '../utils';
import { STATUS, PLAYER } from '../constants';
import { store } from '../store';
import { setCurrentPlayer, setField, setStatus } from '../actions';

export const handleCellClick = (cellIndex, dispatch) => {
	const { status, currentPlayer, field } = store.getState();
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return;
	}

	const newField = [...field];

	newField[cellIndex] = currentPlayer;

	dispatch(setField(newField));

	if (checkWin(newField, currentPlayer)) {
		dispatch(setStatus(STATUS.WIN));
	} else if (checkEmptyCell(newField)) {
		dispatch(setCurrentPlayer(currentPlayer));
	} else {
		dispatch(setStatus(STATUS.DRAW));
	}
};
