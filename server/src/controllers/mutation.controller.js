const Mutation = require("../models/Mutation");

function hasMutation(dna) {
  const n = dna.length;
  const m = dna[0].length;

  function check(row, col, dx, dy) {
    const letter = dna[row][col];
    let count = 1;

    for (let i = 1; i < 4; i++) {
      const newRow = row + i * dx;
      const newCol = col + i * dy;

      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < m &&
        dna[newRow][newCol] === letter
      ) {
        count++;
      } else {
        break;
      }
    }

    return count === 4;
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      for (const [dx, dy] of [
        [1, 0],
        [0, 1],
        [1, 1],
        [1, -1],
      ]) {
        if (check(row, col, dx, dy)) {
          return true;
        }
      }
    }
  }

  return false;
}

async function saveDna(dna, hasMutation) {
  try {
    const mutation = Mutation({ dna, hasMutation });
    await mutation.save();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  hasMutation,
  saveDna,
};
