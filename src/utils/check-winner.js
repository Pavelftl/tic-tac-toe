import { WIN_PATTERNS } from '../consts';

export const checkWinner = field => {
	for (const pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;

		if (field[a] && field[a] === field[b] && field[a] === field[c]) {
			return field[a];
		}
	}
};
