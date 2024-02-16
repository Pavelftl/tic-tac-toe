import InformationLayout from './InformationLayout';

const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let status = null;
	if (isDraw) {
		status = 'Ничья';
	} else {
		if (isGameEnded) {
			status = `Победа: ${currentPlayer}`;
		} else {
			status = `Ходит: ${currentPlayer}`;
		}
	}

	return <InformationLayout status={status} />;
};

export default Information;
