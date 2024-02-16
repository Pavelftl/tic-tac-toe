import PropTypes from 'prop-types';
import styles from './GameLayout.module.scss';
import Information from './components/Information/Information';
import Field from './components/Field/Field';

const GameLayout = ({ onClick, isDraw, isGameEnded, currentPlayer, field, onButton }) => {
	return (
		<div className="main">
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field field={field} onButton={onButton} />

			<p onClick={onClick} className={styles.text}>
				Начать заново
			</p>
		</div>
	);
};
GameLayout.propTypes = {
	onClick: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.array,
	onButton: PropTypes.func,
};

export default GameLayout;
