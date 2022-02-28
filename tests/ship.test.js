/* eslint-disable no-undef */
const ship = require('../src/ship');

test('returns ship length', () => {
  expect(ship(3).length).toBe(3);
});

describe('returns ship array before and after hit', () => {
  const testShip = ship(2);

  test('returns ship array before hit', () => {
    expect(testShip.shipArray).toEqual(['O', 'O']);
  });

  test('returns ship array after hit', () => {
    testShip.hit(1);
    expect(testShip.shipArray).toEqual(['O', 'X']);
  });
});

describe('returns isSunk before and after sunk', () => {
  const testShip = ship(1);

  test('returns false for isSunk', () => {
    expect(testShip.isSunk()).toBeFalsy();
  });

  test('returns true for isSunk', () => {
    testShip.hit(0);
    expect(testShip.isSunk()).toBeTruthy();
  });
});
