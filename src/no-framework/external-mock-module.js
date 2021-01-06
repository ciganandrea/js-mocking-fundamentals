require('../__no-framework-mocks__/utils');
const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');

require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require('assert');
const utils = require('../utils');
const thumbWar = require('../thumb-war');

const winner = thumbWar('Super Mario', 'Superman');

assert.strictEqual(winner, 'Super Mario');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
	['Super Mario', 'Superman'],
	['Super Mario', 'Superman'],
]);

delete require.cache[utilsPath];
