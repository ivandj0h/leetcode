/*
 There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
 The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
 Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
*/

var pacificAtlantic = function(heights) {
    // Set amount of rows and columns to variables
    const numRows = heights.length
    const numCols = heights[0].length

    // Create matrixes to hold which cells can visit each ocean
    const pacific = Array(numRows).fill().map(() => Array(numCols).fill(false))
    const atlantic = Array(numRows).fill().map(() => Array(numCols).fill(false))

    // Run dfs on first and last columns that touch an ocean
    for (let col=0 ;col<heights[0].length;col++){
       dfs(0, col, -Infinity, pacific)
       dfs(numRows - 1, col, -Infinity, atlantic)
    }

    // Run dfs on each cell on the top and bottom rows that touch an ocean
    for (let row = 0;row<heights.length; row++){
        dfs(row, 0, -Infinity, pacific)
        dfs(row, numCols - 1, -Infinity, atlantic)
    }

    // Starting from an edge of heights that touches an ocean, move inward and add all cells to the ocean matrix that can spill into the previously vistited cell
    function dfs(i, j, prev, ocean){
        // Stop dfs if we given coordinates that are not on the board, if the value of the cell we are visiting cannot spill water into the previous cell, or if we have already visited this cell
        if (i<0 || i >= numRows || j < 0 || j >= numCols || heights[i][j] < prev || ocean[i][j]) {
            return
        }

        // Set this cell as visited by the current ocean
        ocean[i][j] = true

        // Look in all directions to find more nodes that can visit the current ocean by flowing into the cell at [i, j]
        dfs(i+1, j, heights[i][j], ocean)
        dfs(i-1, j, heights[i][j], ocean)
        dfs(i, j+1, heights[i][j], ocean)
        dfs(i, j-1, heights[i][j], ocean)    
    }

    const res = []

    // Check which cells [i, j] are able to touch both oceans by checking if a cell is in both ocean matrixes
    for (let i=0;i<numRows;i++){
        for (let j=0;j<numCols;j++){
            if (atlantic[i][j] && pacific[i][j]){
                res.push([i, j])
            }
        }
    }
    return res
}