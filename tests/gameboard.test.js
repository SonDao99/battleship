/* eslint-disable no-undef */
const gameboard = require('../src/gameboard');

test('returns gameboard', () => {
  expect(gameboard().getBoard()).toEqual(
    [['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']],
  );
});

test('place ship x axis', () => {
  const testGame = gameboard();
  testGame.placeShip('de', 'x', [2, 3]);
  expect(testGame.getBoard()).toEqual(
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

test('place ship y axis', () => {
  const testGame = gameboard();
  testGame.placeShip('su', 'y', [5, 5]);
  expect(testGame.getBoard()).toEqual(
    [['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', 'su0', '', '', '', ''],
      ['', '', '', '', '', 'su1', '', '', '', ''],
      ['', '', '', '', '', 'su2', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']],
  );
});

test('place ship out of bounds along x axis', () => {
  const testGame = gameboard();
  testGame.placeShip('de', 'x', [0, 9]);
  expect(testGame.getBoard()).toEqual(
    [['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']],
  );
});

test('place ship out of bounds along y axis', () => {
  const testGame = gameboard();
  testGame.placeShip('de', 'y', [9, 0]);
  expect(testGame.getBoard()).toEqual(
    [['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']],
  );
});

test('receive an attack that misses', () => {
  const testGame = gameboard();
  testGame.receiveAttack([0, 0]);
  expect(testGame.getBoard()).toEqual(
    [['m', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']],
  );
});

test('receive an attack that hits a ship', () => {
  const testGame = gameboard();
  testGame.placeShip('de', 'x', [2, 3]);
  testGame.receiveAttack([2, 4]);
  expect(testGame.getBoard()).toEqual(
    [['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'de0', 'X', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']],
  );
});

test('returns false when not all ships have been sunk', () => {
  const testGame = gameboard();
  expect(testGame.allSunk()).toBeFalsy();
});

test('returns true when all ships have been sunk', () => {
  const testGame = gameboard();
  testGame.allShips.forEach((ship) => {
    for (let i = 0; i < ship.length; i += 1) {
      ship.hit(i);
    }
    console.log(ship.isSunk());
  });
  expect(testGame.allSunk()).toBeTruthy();
});
