import { Field, Information } from './components';
import styles from './game.module.css';
import { handleRestart } from './handlers';

export const GameLayout = () => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};
