import './style.css';

const gameLoop = require('./gameLoop');

const userInterface = (() => {
  // Generating grids on the page:
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

  // Create a variable for axis chosen:
  let axis = 'x';

  const axisButton = document.querySelector('#axis');
  axisButton.addEventListener('click', () => {
    if (axisButton.textContent === 'horizontal') {
      axis = 'y';
      axisButton.textContent = 'vertical';
    } else {
      axis = 'x';
      axisButton.textContent = 'horizontal';
    }
  });

  // Create an array for the lengths of the ships that needs to be placed. Remove when placed:
  const shipLengths = [5, 4, 3, 3, 2];

  // Create an array for the coordinates to place the ships:
  const shipCoordinates = [];
  const takenSquares = [];
  const shipAxes = [];

  // Define function for hovering over squares that are on the grid:
  const selectionGrid = document.querySelector('#selectionGrid');
  const shipHover = (e, length) => {
    const row = Number(e.target.classList[1][0]);
    const column = Number(e.target.classList[1][1]);
    if (axis === 'x') {
      if (column <= 10 - length) {
        for (let i = column; i < column + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${row}${i}`)[0];
          square.classList.add('hover');
        }
      }
    } else if (axis === 'y') {
      if (row <= 10 - length) {
        for (let i = row; i < row + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${i}${column}`)[0];
          square.classList.add('hover');
        }
      }
    }
  };

  // Define function for when the mouse comes off the square in the grid:
  const shipNoHover = (e, length) => {
    const row = Number(e.target.classList[1][0]);
    const column = Number(e.target.classList[1][1]);
    if (axis === 'x') {
      if (column <= 10 - length) {
        for (let i = column; i < column + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${row}${i}`)[0];
          square.classList.remove('hover');
        }
      }
    } else if (axis === 'y') {
      if (row <= 10 - length) {
        for (let i = row; i < row + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${i}${column}`)[0];
          square.classList.remove('hover');
        }
      }
    }
  };

  // Define mouseover and mouseout events for each grid square:
  const selectionSquares = document.querySelectorAll('#selectionGrid .gameSquare');
  selectionSquares.forEach((square) => square.addEventListener('mouseover', (e) => {
    shipHover(e, shipLengths[0]);
  }));
  selectionSquares.forEach((square) => square.addEventListener('mouseout', (e) => {
    shipNoHover(e, shipLengths[0]);
  }));

  // Define function to place the ships on the grid:
  const shipPlacement = (e, length) => {
    const row = Number(e.target.classList[1][0]);
    const column = Number(e.target.classList[1][1]);

    const shipSquares = [];

    if (axis === 'x') {
      // Adding the squares the current ship will take up to an array:
      for (let i = column; i < column + length; i += 1) {
        shipSquares.push([row, i]);
      }

      // Checking to see if any of the squares are taken:
      for (let i = 0; i < shipSquares.length; i += 1) {
        if (takenSquares.filter((coordinate) => ((coordinate[0] === shipSquares[i][0])
        && (coordinate[1] === shipSquares[i][1]))).length !== 0) {
          return;
        }
      }

      // Add the class to change background and save the coordinates
      if (column <= 10 - length) {
        shipCoordinates.push([row, column]);
        shipAxes.push(axis);
        for (let i = column; i < column + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${row}${i}`)[0];
          square.classList.add('select');
          // takenSquares.push([row, i]);
        }
        takenSquares.push(...shipSquares);
        shipLengths.splice(0, 1);
      }
    } else if (axis === 'y') {
      for (let i = row; i < row + length; i += 1) {
        shipSquares.push([i, column]);
      }

      for (let i = 0; i < shipSquares.length; i += 1) {
        if (takenSquares.filter((coordinate) => ((coordinate[0] === shipSquares[i][0])
        && (coordinate[1] === shipSquares[i][1]))).length !== 0) {
          return;
        }
      }

      if (row <= 10 - length) {
        shipCoordinates.push([row, column]);
        shipAxes.push(axis);
        for (let i = row; i < row + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${i}${column}`)[0];
          square.classList.add('select');
          takenSquares.push([i, column]);
        }
        shipLengths.splice(0, 1);
      }
    }
  };

  // Define event to place ships on the grid:
  selectionSquares.forEach((square) => square.addEventListener('click', (e) => {
    shipPlacement(e, shipLengths[0]);
  }));

  // Start a new game:
  const newGame = gameLoop();

  // Defining the function to display player one's grid which includes the ships
  const playerOneGrid = document.querySelector('#playerOneGrid');
  const displayPlayerOneBoard = (board) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const oneSquare = board[i][j];
        if (oneSquare !== '' && oneSquare !== 'm' && oneSquare !== 'X') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.style.backgroundColor = 'rgb(212, 209, 209)';
        } else if (oneSquare === 'm') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="rgb(130, 127, 127)" />
            </svg>`;
        } else if (oneSquare === 'X') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="brown" />
            </svg>`;
        }
      }
    }
  };

  // Display player one's grid before the player makes the first move
  // displayPlayerOneBoard(newGame.getPlayerOneBoard());

  // Player two's grid doesn't include the ships
  const playerTwoGrid = document.querySelector('#playerTwoGrid');
  const displayPlayerTwoBoard = (board) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const oneSquare = board[i][j];
        if (oneSquare === 'm') {
          const updateSquare = playerTwoGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="rgb(130, 127, 127)" />
            </svg>`;
        } else if (oneSquare === 'X') {
          const updateSquare = playerTwoGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.style.backgroundColor = 'rgb(212, 209, 209)';
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="brown" />
            </svg>`;
        }
      }
    }
  };

  // Pressing start game button has to send the ship locations to the game loop:
  const startGameButton = document.querySelector('#startGame');
  startGameButton.addEventListener('click', () => {
    if (shipLengths.length === 0) {
      newGame.placePlayerOneShips(shipCoordinates, shipAxes);
      newGame.placePlayerTwoShips();

      const mainMenu = document.querySelector('#mainMenu');
      mainMenu.style.display = 'none';

      displayPlayerOneBoard(newGame.getPlayerOneBoard());
      displayPlayerTwoBoard(newGame.getPlayerTwoBoard());
    }
  });

  // Getting the remaining ships for each player means looping through the allShips array
  const getRemainingShips = (ships) => {
    let remainingShips = 5;
    ships.forEach((ship) => {
      if (ship.isSunk()) {
        remainingShips -= 1;
      }
    });
    return remainingShips;
  };

  // DOM interation to change the number of ships
  const playerOneRemaining = document.querySelector('#playerOneRemaining');
  const playerTwoRemaining = document.querySelector('#playerTwoRemaining');
  const displayRemainingShips = () => {
    playerOneRemaining.textContent = (playerOneRemaining.textContent.slice(0, 17)
    + getRemainingShips(newGame.getPlayerOneShips()).toString());

    playerTwoRemaining.textContent = (playerTwoRemaining.textContent.slice(0, 17)
    + getRemainingShips(newGame.getPlayerTwoShips()).toString());
  };

  const displayGameOver = () => {
    const gameOverDiv = document.querySelector('#gameOver');
    gameOverDiv.style.display = 'flex';

    if (playerOneRemaining.textContent === 'Ships Remaining: 0') {
      const gameOverMessage = document.querySelector('#gameOverMessage');
      gameOverMessage.textContent = 'Game Over! Try again?';
    }

    const backToMenu = document.querySelector('#backToMenu');
    backToMenu.addEventListener('click', () => {
      window.location.reload();
    });
  };

  /* Each square on player two's grid has an event listener which records the move from player one
  and generates a random move from player two */
  const computerGameSquares = document.querySelectorAll('#playerTwoGrid .gameSquare');
  computerGameSquares.forEach((square) => square.addEventListener('click', () => {
    if (!newGame.gameIsOver()) {
      const selectedCoord = [Number(square.classList[1][0]), Number(square.classList[1][1])];
      if (newGame.getPlayerOne().getLegalMoves().filter((move) => ((move[0] === selectedCoord[0])
      && (move[1] === selectedCoord[1]))).length !== 0) {
        newGame.move(selectedCoord);
        displayPlayerOneBoard(newGame.getPlayerOneBoard());
        displayPlayerTwoBoard(newGame.getPlayerTwoBoard());
        displayRemainingShips();
        if (newGame.gameIsOver()) {
          displayGameOver();
        }
      }
    } else {
      displayGameOver();
    }
  }));
})();
