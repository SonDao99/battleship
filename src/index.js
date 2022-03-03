import player from './player';
import './style.css';

const gameLoop = require('./gameLoop');

const userInterface = (() => {
  const battleGrids = document.querySelectorAll('.battleGrid');

  battleGrids.forEach((grid) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameSquare = document.createElement('div');
        gameSquare.classList.add('gameSquare');
        gameSquare.classList.add(`${i}${j}`);
        grid.appendChild(gameSquare);
      }
    }
  });

  const newGame = gameLoop();

  const playerOneGrid = document.querySelector('#playerOneGrid');
  const displayPlayerOneBoard = (board) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const oneSquare = board[i][j];
        if (oneSquare !== '' && oneSquare !== 'm' && oneSquare !== 'X') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.style.backgroundColor = 'rgb(158, 157, 157)';
        } else if (oneSquare === 'm') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="black" />
          </svg>`;
        } else if (oneSquare === 'X') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="red" />
          </svg>`;
        }
      }
    }
  };
  displayPlayerOneBoard(newGame.getPlayerOneBoard());

  const playerTwoGrid = document.querySelector('#playerTwoGrid');
  const displayPlayerTwoBoard = (board) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const oneSquare = board[i][j];
        if (oneSquare === 'm') {
          const updateSquare = playerTwoGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="black" />
          </svg>`;
        } else if (oneSquare === 'X') {
          const updateSquare = playerTwoGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="red" />
          </svg>`;
        }
      }
    }
  };

  const computerGameSquares = document.querySelectorAll('#playerTwoGrid .gameSquare');
  computerGameSquares.forEach((square) => square.addEventListener('click', () => {
    if (!newGame.gameIsOver()) {
      newGame.move([Number(square.classList[1][0]), Number(square.classList[1][1])]);
      displayPlayerOneBoard(newGame.getPlayerOneBoard());
      displayPlayerTwoBoard(newGame.getPlayerTwoBoard());
    }
  }));
})();
