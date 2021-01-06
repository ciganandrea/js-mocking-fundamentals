const assert = require('assert');
const utilsPath = require.resolve('../utils');

function fn(implementation = () => {}) {
	const mockFn = (...args) => {
		mockFn.mock.calls.push(args);
		return implementation(...args);
	};

	mockFn.mock = { calls: [] };
	mockFn.mockImplementation = (newImplementation) =>
		(implementation = newImplementation);

	return mockFn;
}

require.cache[utilsPath] = {
	id: utilsPath,
	filename: utilsPath,
	loaded: true,
	exports: {
		getWinner: fn((player1, player2) => player1),
	},
};

const utils = require('../utils');
const thumbWar = require('../thumb-war');

const winner = thumbWar('Super Mario', 'Superman');

assert.strictEqual(winner, 'Super Mario');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
	['Super Mario', 'Superman'],
	['Super Mario', 'Superman'],
]);

// Clean-up
delete require.cache[utilsPath];
