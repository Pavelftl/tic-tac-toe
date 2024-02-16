import GameLayout from './GameLayout';
import { useState } from 'react';
import { checkWinner } from './utils/check-winner';

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleClick = index => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			const winner = checkWinner(newField);
			if (winner) {
				setIsGameEnded(true);
			} else if (!newField.includes('')) {
				setIsDraw(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			}
		}
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<GameLayout
			onButton={index => handleClick(index)}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			onClick={resetGame}
			field={field}
		/>
	);
}

export default App;
