import { Field, Information } from './components';
import styles from './game.module.css';
import { handleRestart } from './handlers';
import { useDispatch } from 'react-redux';

export const GameLayout = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button
				className={styles.restartButton}
				onClick={() => handleRestart(dispatch)}
			>
				Начать заново
			</button>
		</div>
	);
};
