const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils', () => {
	return {
		getWinner: jest.fn((player1, player2) => player1),
	};
});

test('returns winner', () => {
	const winner = thumbWar('Super Mario', 'Superman');

	expect(winner).toBe('Super Mario');
	expect(utils.getWinner.mock.calls).toEqual([
		['Super Mario', 'Superman'],
		['Super Mario', 'Superman'],
	]);

	// Clean-up
	utils.getWinner.mockReset();
});
