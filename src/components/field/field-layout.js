import { PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';
import { store } from '../../store';
import { handleCellClick } from '../../handlers';
import { useEffect, useState } from 'react';

export const FieldLayout = () => {
	const [field, setFields] = useState(store.getState().field);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const newFields = store.getState().field;

			const isFieldChanged = newFields.some((cell, index) => cell !== field[index]);

			if (isFieldChanged) {
				setFields(newFields);
			}
		});

		return () => unsubscribe();
	}, [field]);

	return (
		<div className={styles.field}>
			{field.map((cellPlayer, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</div>
	);
};
