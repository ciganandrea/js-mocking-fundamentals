// const thumbWar = require('../thumb-war')
// const utilsMock = require('../utils')

// jest.mock('../utils')

// test('returns winner', () => {
//   const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
//   expect(winner).toBe('Kent C. Dodds')
//   expect(utilsMock.getWinner.mock.calls).toEqual([
//     ['Kent C. Dodds', 'Ken Wheeler'],
//     ['Kent C. Dodds', 'Ken Wheeler']
//   ])

//   // cleanup
//   utilsMock.getWinner.mockReset()
// })

const utils = require('../utils');
const thumbWar = require('../thumb-war');

jest.mock('../utils');

test('returns winner', () => {
	const winner = thumbWar('Super Mario', 'Superman');

	expect(winner).toBe('Super Mario');
	expect(utils.getWinner.mock.calls).toEqual([
		['Super Mario', 'Superman'],
		['Super Mario', 'Superman'],
	]);

	utils.getWinner.mockReset();
});
