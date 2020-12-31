const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;

// Monkey-patching
utils.getWinner = (player1, player2) => player1;

const winner = thumbWar('Super Mario', 'Superman');
assert.strictEqual(winner, 'Super Mario');

// Clean-up
utils.getWinner = originalGetWinner;
