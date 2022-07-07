/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function setMatrix(matrix, setValueTo = 0) {
    const pointsToMutate = []
    const rows = matrix.length
    const columns = matrix[0].length
    let i = 0;
    let j = 0;
    while(rows > i) {
      j = 0;
      while(columns > j) {

          const valueAtPoint = matrix[i][j]
          if(valueAtPoint === setValueTo) {
              let z = columns;
              while(z--){
                  if(z !== j) {
                      pointsToMutate.push([i, z])
                  }
              }
              z = rows
              while(z--){
                  if(z !== i) {
                      pointsToMutate.push([z, j])
                  }
              }
          }
          j++
      }
      i++
    }

    let k = pointsToMutate.length;
    while(k--) {
      const point = pointsToMutate[k]
      matrix[point[0]][point[1]] = setValueTo
    }
    return matrix
}


var setZeroes = function(matrix) {
    return setMatrix(matrix, 0)
};