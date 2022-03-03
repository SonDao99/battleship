const player = require('./player');
const gameboard = require('./gameboard');

const gameLoop = (playerOneName = 'Player', playerTwoName = 'Computer') => {
  const playerOne = player(playerOneName);
  const playerTwo = player(playerTwoName);

  const getPlayerOne = () => playerOne;
  const getPlayerTwo = () => playerTwo;

  const playerOneBoard = gameboard();
  const playerTwoBoard = gameboard();

  playerOneBoard.placeShip('ca', 'x', [0, 2]);
  playerOneBoard.placeShip('ba', 'x', [2, 3]);
  playerOneBoard.placeShip('cr', 'y', [4, 1]);
  playerOneBoard.placeShip('su', 'x', [6, 6]);
  playerOneBoard.placeShip('de', 'y', [8, 2]);

  playerTwoBoard.placeShip('ca', 'x', [0, 2]);
  playerTwoBoard.placeShip('ba', 'x', [2, 3]);
  playerTwoBoard.placeShip('cr', 'y', [4, 1]);
  playerTwoBoard.placeShip('su', 'x', [6, 6]);
  playerTwoBoard.placeShip('de', 'y', [8, 2]);

  const getPlayerOneBoard = () => playerOneBoard.getBoard();
  const getPlayerTwoBoard = () => playerTwoBoard.getBoard();

  let currentPlayer = playerOne;
  let gameOver = false;

  const gameIsOver = () => gameOver;

  const move = (coordinates) => {
    if (currentPlayer === playerOne) {
      playerTwoBoard.receiveAttack(coordinates);
      if (playerTwoBoard.allSunk()) {
        gameOver = true;
      }
      currentPlayer = playerTwo;
      move(playerTwo.makeRandomMove());
    } else {
      playerOneBoard.receiveAttack(coordinates);
      if (playerOneBoard.allSunk()) {
        gameOver = true;
      }
      currentPlayer = playerOne;
    }
  };

  return {
    getPlayerOne, getPlayerTwo, getPlayerOneBoard, getPlayerTwoBoard, gameIsOver, move,
  };
};

module.exports = gameLoop;
