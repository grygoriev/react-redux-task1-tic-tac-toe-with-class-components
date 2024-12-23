import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectStatus } from '../../selectors';

export const Information = () => {
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
