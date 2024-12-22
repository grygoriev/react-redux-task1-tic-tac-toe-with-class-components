import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';
import { store } from '../../store';
import { useEffect, useState } from 'react';

export const Information = () => {
	const [status, setStatus] = useState(store.getState().status);
	const [currentPlayer, setCurrentPlayer] = useState(store.getState().currentPlayer);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const newStatus = store.getState().status;
			const newCurrentPlayer = store.getState().currentPlayer;

			if (newStatus !== status) setStatus(newStatus);
			if (newCurrentPlayer !== currentPlayer) setCurrentPlayer(newCurrentPlayer);
		});

		return () => unsubscribe();
	}, [status, currentPlayer]);

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
