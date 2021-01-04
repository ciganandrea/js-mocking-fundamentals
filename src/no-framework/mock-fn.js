const assert = require('assert');

const utils = require('../utils');
const thumbWar = require('../thumb-war');

function fn(implementation) {
	const mockFn = (...args) => {
		mockFn.mock.calls.push(args);
		return implementation(...args);
	};

	mockFn.mock = {
		calls: [],
	};

	return mockFn;
}

// Monkey-patch
const originalGetWinner = utils.getWinner;
utils.getWinner = fn((player1, player2) => player1);

const winner = thumbWar('Super Mario', 'Superman');

assert.strictEqual(winner, 'Super Mario');

assert.deepStrictEqual(utils.getWinner.mock.calls, [
	['Super Mario', 'Superman'],
	['Super Mario', 'Superman'],
]);

// Clean-up
utils.getWinner = originalGetWinner;
