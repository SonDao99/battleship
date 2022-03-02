const gameboard = require('./gameboard');

const player = (name) => {
  // const board = gameboard();

  let legalMoves = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      legalMoves.push([i, j]);
    }
  }

  const getLegalMoves = () => legalMoves;

  const setLegalMoves = (newList) => { legalMoves = newList; };

  const saveAttackMove = (newMove) => {
    setLegalMoves(getLegalMoves().filter((move) => (
      (move[0] !== newMove[0]) || (move[1] !== newMove[1])
    )));
  };

  const makeRandomMove = () => (
    getLegalMoves()[Math.floor(Math.random() * (getLegalMoves().length - 1))]
  );

  return {
    name, getLegalMoves, saveAttackMove, makeRandomMove,
  };
};

module.exports = player;
