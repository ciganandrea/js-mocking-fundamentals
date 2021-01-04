const assert = require('assert');

const utils = require('../utils');
const thumbWar = require('../thumb-war');

function fn(implementation = () => {}) {
	const mockFn = (...args) => {
		mockFn.mock.calls.push(args);
		return implementation(...args);
	};

	mockFn.mock = { calls: [] };
	mockFn.mockImplementation = (newImplementation) => {
		implementation = newImplementation;
	};

	return mockFn;
}

function spyOn(obj, key) {
	const originalValue = obj[key];

	obj[key] = fn();
	obj[key].mockRestore = () => (obj[key] = originalValue);
}

spyOn(utils, 'getWinner');

utils.getWinner.mockImplementation((player1, player2) => player1);

const winner = thumbWar('Super Mario', 'Superman');

assert.strictEqual(winner, 'Super Mario');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
	['Super Mario', 'Superman'],
	['Super Mario', 'Superman'],
]);

utils.getWinner.mockRestore();
