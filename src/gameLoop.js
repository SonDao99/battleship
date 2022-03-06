const player = require('./player');
const gameboard = require('./gameboard');

const gameLoop = (playerOneName = 'Player', playerTwoName = 'Computer') => {
  const playerOne = player(playerOneName);
  const playerTwo = player(playerTwoName);

  const getPlayerOne = () => playerOne;
  const getPlayerTwo = () => playerTwo;

  const playerOneBoard = gameboard();
  const playerTwoBoard = gameboard();

  /* playerOneBoard.placeShip('ca', 'x', [0, 2]);
  playerOneBoard.placeShip('ba', 'x', [2, 3]);
  playerOneBoard.placeShip('cr', 'y', [4, 1]);
  playerOneBoard.placeShip('su', 'x', [6, 6]);
  playerOneBoard.placeShip('de', 'y', [8, 2]); */

  /* playerTwoBoard.placeShip('ca', 'x', [0, 2]);
  playerTwoBoard.placeShip('ba', 'x', [2, 3]);
  playerTwoBoard.placeShip('cr', 'y', [4, 1]);
  playerTwoBoard.placeShip('su', 'x', [6, 6]);
  playerTwoBoard.placeShip('de', 'y', [8, 2]); */

  const shipCodes = ['ca', 'ba', 'cr', 'su', 'de'];

  const placePlayerOneShips = (coords, axes) => {
    for (let i = 0; i < 5; i += 1) {
      playerOneBoard.placeShip(shipCodes[i], axes[i], coords[i]);
    }
  };

  const placePlayerTwoShips = () => {
    const shipLengths = [5, 4, 3, 3, 2];

    let availableSquares = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        availableSquares.push([i, j]);
      }
    }

    const takenSquares = [];

    const randomAxis = () => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return 'x';
      }
      return 'y';
    };

    let axis;
    for (let i = 0; i < 5; i += 1) {
      axis = randomAxis();
      if (axis === 'x') {
        let legalSquares = availableSquares.filter((square) => square[1] <= (10 - shipLengths[i]));
        for (let j = 0; j < takenSquares.length; j += 1) {
          for (let k = 1; k < shipLengths[i]; k += 1) {
            legalSquares = legalSquares.filter((square) => !(square[0] === takenSquares[j][0]
              && square[1] === (takenSquares[j][1] - k)));
          }
        }

        const squarePick = legalSquares[Math.floor(Math.random() * legalSquares.length)];
        playerTwoBoard.placeShip(shipCodes[i], axis, squarePick);
        const row = squarePick[0];
        const column = squarePick[1];
        for (let j = column; j < column + shipLengths[i]; j += 1) {
          availableSquares = availableSquares.filter(
            (square) => !(square[0] === row && square[1] === j),
          );
          takenSquares.push([row, j]);
        }

        console.log(availableSquares.length);
        console.log(legalSquares);
        console.log(takenSquares);
      } else if (axis === 'y') {
        let legalSquares = availableSquares.filter((square) => square[0] <= (10 - shipLengths[i]));
        for (let j = 0; j < takenSquares.length; j += 1) {
          for (let k = 1; k < shipLengths[i]; k += 1) {
            legalSquares = legalSquares.filter((square) => !(square[0] === (takenSquares[j][0] - k)
              && square[1] === takenSquares[j][1]));
          }
        }

        const squarePick = legalSquares[Math.floor(Math.random() * legalSquares.length)];
        playerTwoBoard.placeShip(shipCodes[i], axis, squarePick);
        const row = squarePick[0];
        const column = squarePick[1];
        for (let j = row; j < row + shipLengths[i]; j += 1) {
          availableSquares = availableSquares.filter((square) => !(square[0] === j
            && square[1] === column));
          takenSquares.push([j, column]);
        }

        console.log(availableSquares);
        console.log(legalSquares);
        console.log(takenSquares);
      }
    }
  };

  const getPlayerOneBoard = () => playerOneBoard.getBoard();
  const getPlayerTwoBoard = () => playerTwoBoard.getBoard();

  const getPlayerOneShips = () => playerOneBoard.getAllShips();
  const getPlayerTwoShips = () => playerTwoBoard.getAllShips();

  let currentPlayer = playerOne;
  let gameOver = false;

  const gameIsOver = () => gameOver;

  const move = (coordinates) => {
    if (currentPlayer === playerOne) {
      playerOne.saveAttackMove(coordinates);
      playerTwoBoard.receiveAttack(coordinates);
      if (playerTwoBoard.allSunk()) {
        gameOver = true;
      }
      currentPlayer = playerTwo;
      move(playerTwo.makeRandomMove());
    } else {
      playerTwo.saveAttackMove(coordinates);
      playerOneBoard.receiveAttack(coordinates);
      if (playerOneBoard.allSunk()) {
        gameOver = true;
      }
      currentPlayer = playerOne;
    }
  };

  return {
    getPlayerOne,
    getPlayerTwo,
    placePlayerOneShips,
    placePlayerTwoShips,
    getPlayerOneBoard,
    getPlayerTwoBoard,
    getPlayerOneShips,
    getPlayerTwoShips,
    gameIsOver,
    move,
  };
};

module.exports = gameLoop;
