/* eslint-disable no-undef */
const gameLoop = require('../src/gameLoop');

test('get player functions can return an array of length 100 (legal moves)', () => {
  const testGame = gameLoop();
  expect(testGame.getPlayerOne().getLegalMoves().length).toBe(100);
});

test('get player board functions can return an array of length 10 (the board)', () => {
  const testGame = gameLoop();
  expect(testGame.getPlayerOneBoard().length).toBe(10);
});

test('gameIsOver() returns the state of the game (false)', () => {
  const testGame = gameLoop();
  expect(testGame.gameIsOver()).toBeFalsy();
});
