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
              const addedPointsToMutate = []
              let z = columns;
              while(z--){
                  if(z !== j) {
                      addedPointsToMutate.push([i, z])
                  }
              }
              z = rows
              while(z--){
                  if(z !== i) {
                      addedPointsToMutate.push([z, j])
                  }
              }
              pointsToMutate.push(...addedPointsToMutate)
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