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
    // console.log("\n\nSTART")
    while(rows > i) {
        j = 0;
      while(columns > j) {

          const valueAtPoint = matrix[i][j]
          // console.log({ valueAtPoint })
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
              // console.log({ addedPointsToMutate })
              pointsToMutate.push(...addedPointsToMutate)
          }
          j++
      }
      i++
    }

    // console.log({ pointsToMutate })
    let k = pointsToMutate.length;
    while(k--) {
      const [ row, column ] = pointsToMutate[k]
      matrix[row][column] = setValueTo
    }
    // console.log({ matrix })
    return matrix
}


var setZeroes = function(matrix) {
    return setMatrix(matrix, 0)
};