//Made from Siyi and Michael

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters);
    verticalJoin2 = verticalJoin.map(ls => ls.join(''))
    for (l of verticalJoin2) {
        if (l.includes(word)) return true;
    }


    return false;
}

const transpose = function(matrix) { 
    const transposedArray = [];
    for (let x = 0; x < matrix.length; x++) { //x rows
      for (let y = 0; y < matrix[x].length; y++) { //y columns
        if (!transposedArray[y]) {
          transposedArray[y] = [];
        }
        transposedArray[y][x] = matrix[x][y];
      }
    }
    return transposedArray;
  };

module.exports = wordSearch