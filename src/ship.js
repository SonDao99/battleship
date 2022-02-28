const ship = (length) => {
  const shipArray = [];

  for (let i = 0; i < length; i += 1) {
    shipArray.push('O');
  }

  const hit = (position) => {
    shipArray[position] = 'X';
  };

  const isSunk = () => {
    const hitArray = shipArray.filter((position) => position !== 'O');
    return hitArray.length === length;
  };

  return {
    length, shipArray, hit, isSunk,
  };
};

module.exports = ship;
