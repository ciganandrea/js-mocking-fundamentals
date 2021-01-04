const utils = require('../utils');
const thumbWar = require('../thumb-war');

test('returns winner', () => {
	jest.spyOn(utils, 'getWinner');
	utils.getWinner.mockImplementation((player1, player2) => player1);

	const winner = thumbWar('Super Mario', 'Superman');

	expect(winner).toBe('Super Mario');
	expect(utils.getWinner.mock.calls).toEqual([
		['Super Mario', 'Superman'],
		['Super Mario', 'Superman'],
	]);

	utils.getWinner.mockRestore();
});
