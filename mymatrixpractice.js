let matrix=[[1,2,3],[4,5,6],[7,8,9]]

function convert2DArrayToSpring(matrix){
  let result=[];
  let top=0;
  let left=0;
  let right=matrix[0].length-1;
  let bottom=matrix.length-1;
  let direction='right';
  while (top<=bottom && left<=right) {
    if (direction==='right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top++;
      direction='down'
    }
    if (direction==='down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right--;
      direction='left'
    }
    if (direction==='left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--;
      direction='up'
    }
    if (direction==='up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++;
      direction='right'
    }
  }
  return result;
}

console.log(convert2DArrayToSpring(matrix));
