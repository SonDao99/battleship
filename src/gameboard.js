const ship = require('./ship');

const gameboard = () => {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push([]);
    for (let j = 0; j < 10; j += 1) {
      board[i].push('');
    }
  }

  const getBoard = () => board;

  const carrier = ship(5);
  const battleship = ship(4);
  const cruiser = ship(3);
  const submarine = ship(3);
  const destroyer = ship(2);

  const allShips = [carrier, battleship, cruiser, submarine, destroyer];

  const getAllShips = () => allShips;

  const shipSelection = (shipCode) => {
    if (shipCode === 'de') {
      return destroyer;
    } if (shipCode === 'ca') {
      return carrier;
    } if (shipCode === 'ba') {
      return battleship;
    } if (shipCode === 'cr') {
      return cruiser;
    }
    return submarine;
  };

  const placeShip = (shipCode, axis, coordinates) => {
    const xCoordinate = coordinates[0];
    const yCoordinate = coordinates[1];
    const currentShip = shipSelection(shipCode);
    const shipLength = currentShip.length;

    if (axis === 'x' && (yCoordinate + shipLength <= 10)) {
      for (let i = yCoordinate; i < yCoordinate + shipLength; i += 1) {
        board[xCoordinate][i] = shipCode + (i - yCoordinate).toString();
      }
    } else if (axis === 'y' && (xCoordinate + shipLength <= 10)) {
      for (let i = xCoordinate; i < xCoordinate + shipLength; i += 1) {
        board[i][yCoordinate] = shipCode + (i - xCoordinate).toString();
      }
    }
  };

  const receiveAttack = (coordinates) => {
    const xCoordinate = coordinates[0];
    const yCoordinate = coordinates[1];
    const attackedSpot = board[xCoordinate][yCoordinate];
    if (attackedSpot !== '' && attackedSpot !== 'm') {
      const currentShip = shipSelection(attackedSpot.slice(0, 2));
      currentShip.hit(attackedSpot.slice(2));
      board[xCoordinate][yCoordinate] = 'X';
    } else if (attackedSpot === '') {
      board[xCoordinate][yCoordinate] = 'm';
    }
  };

  const allSunk = () => {
    let allSunkStatus = true;
    allShips.forEach((shipElement) => {
      if (shipElement.isSunk() !== true) {
        allSunkStatus = false;
      }
    });
    return allSunkStatus;
  };

  return {
    getBoard, getAllShips, placeShip, receiveAttack, allSunk,
  };
};

module.exports = gameboard;
