const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns the winner', () => {
	const originalGetWinner = utils.getWinner;

	// Monkey-patching
	utils.getWinner = jest.fn((player1, player2) => player1);

	const winner = thumbWar('Super Mario', 'Superman');

	expect(winner).toBe('Super Mario');
	expect(utils.getWinner).toHaveBeenCalledTimes(2);
	expect(utils.getWinner).toHaveBeenCalledWith('Super Mario', 'Superman');
	expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Super Mario', 'Superman');
	expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Super Mario', 'Superman');

	// Clean-up
	utils.getWinner = originalGetWinner;
});
