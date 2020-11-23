// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const mat = new Array(n);
  for (let i = 0; i < n; i++) mat[i] = new Array(n);

  let value = 1;

  let startRow = 0,
    startCol = 0;
  let endRow = n - 1,
    endCol = n - 1;

  const setRow = (idx, row) => {
    mat[row][idx] = value;
    value++;
  };

  const setColumn = (idx, col) => {
    mat[idx][col] = value;
    value++;
  };

  while (startRow <= endRow && startCol <= endCol) {
    // Forward in row, increment to next row
    for (let idx = startCol; idx <= endCol; idx++) {
      setRow(idx, startRow);
    }
    startRow++;

    // Down in column, decrement to left column
    for (let idx = startRow; idx <= endRow; idx++) {
      setColumn(idx, endCol);
    }
    endCol--;

    // Backwards in row, decrement to row above
    for (let idx = endCol; idx >= startCol; idx--) {
      setRow(idx, endRow);
    }
    endRow--;

    // Up in column, increment to next column
    for (let idx = endRow; idx >= startRow; idx--) {
      setColumn(idx, startCol);
    }
    startCol++;
  }

  return mat;
}

matrix(6);

module.exports = matrix;
