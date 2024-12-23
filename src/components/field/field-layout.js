import { PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';
import { handleCellClick } from '../../handlers';
import { useDispatch, useSelector } from 'react-redux';
import { selectField } from '../../selectors';

export const FieldLayout = () => {
	const field = useSelector(selectField);
	const dispatch = useDispatch();

	return (
		<div className={styles.field}>
			{field.map((cellPlayer, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index, dispatch)}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</div>
	);
};
