import styles from './FieldLayout.module.scss';

const FieldLayout = ({ field, onButton }) => {
	return (
		<div className={styles.field}>
			{field.map((value, index) => (
				<button onClick={() => onButton(index)} key={index} className={styles.item}>
					{value}
				</button>
			))}
		</div>
	);
};

export default FieldLayout;
