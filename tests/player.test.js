/* eslint-disable no-undef */
const player = require('../src/player');

test('.name calls the player name', () => {
  const testPlayer = player('test player');
  expect(testPlayer.name).toBe('test player');
});

test('.playerBoard can be viewed and ships can be placed', () => {
  const testPlayer = player('test player');
  testPlayer.playerBoard.placeShip('de', 'x', [2, 3]);
  expect(testPlayer.playerBoard.getBoard()).toEqual(
    [['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'de0', 'de1', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']],
  );
});
