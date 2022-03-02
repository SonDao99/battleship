/* eslint-disable no-undef */
const player = require('../src/player');

test('.name calls the player name', () => {
  const testPlayer = player('test player');
  expect(testPlayer.name).toBe('test player');
});

test('getLegalMoves returns 100 moves as a default', () => {
  const testPlayer = player('test player');
  expect(testPlayer.getLegalMoves().length).toBe(100);
});

test('saving an attack move removes it from the list of legal moves', () => {
  const testPlayer = player('test player');
  testPlayer.saveAttackMove([2, 3]);
  expect(testPlayer.getLegalMoves().length).toBe(99);
});

test('making a random move returns an array of length 2', () => {
  const testPlayer = player('test player');
  expect(testPlayer.makeRandomMove().length).toBe(2);
});
