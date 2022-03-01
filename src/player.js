const gameboard = require('./gameboard');

const player = (name) => {
  const playerBoard = gameboard();

  const makeRandomMove = () => {
    const legalMoves = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (playerBoard.getBoard()[i][j] === '') {
          legalMoves.push([i, j]);
        }
      }
    }
    return legalMoves[Math.floor(Math.random() * (legalMoves.length - 1))];
  };

  return { name, playerBoard, makeRandomMove };
};

module.exports = player;
