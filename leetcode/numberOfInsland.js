const grid=[[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]
const numInsland=(grid)=>{
  let countInsland=0;
  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex]==='1') {
        countInsland++;
        teraform(parseInt(rowIndex),parseInt(colIndex),grid)
      }
    }
  }
  return countInsland;
}

const teraform=(rowIn,colIn,grid)=>{
  if (grid[rowIn][colIn]===undefined || grid[rowIn]==undefined || grid[rowIn][colIn]==='0') {
    return
  }
  grid[rowIn][colIn] = 0;
  teraform(rowIn+1,colIn,grid);
  teraform(rowIn-1,colIn,grid);
  teraform(rowIn,colIn+1,grid);
  teraform(rowIn,colIn-1,grid);
}
console.log(numInsland(grid));
