// First Task :

// Examples
// sum(["1", "five", "2wenty", "thr33"])
//  36

// sum([["1X2", "t3n"],["1024", "5", "64"]])
// 1099

sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]])
// 759

function sum(array) { // O (n+1+n+n) ==> O(n)
  array = flattenArray(array) // O (n)
  let sumArray = [];
  for (let index = 0; index < array.length; index++) { // O(n)
      let numbers = detectNumbers(array[index]); //O(1)
      sumArray.push(...numbers);
  }
  return CalculateSum(sumArray); //0(n)
}

//Function Responisble for Convert Multi level arrays into one level
function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

//Function Responsible for detecting numbers from string
function detectNumbers(inputStrings) {
  let numbers = inputStrings.match(/-?\d+(\.\d+)?/g);
  if (numbers) {
    return numbers;
  } else {
    return ["0"];
  }
}

//Function Responsaible for doing summition process
function CalculateSum(numArr) {
  let sum = 0;
  for (let index = 0; index < numArr.length; index++) {
    sum += Number(numArr[index]);
  }
  console.log(sum);
  return sum;
}

//Task 2
function canExit(maze) {
    const RowsNumbers = maze.length;
    const ColumnNumbers = maze[0].length;
    
    const visited = new Set();
    const queue = [{ row: 0, col: 0 }];
  
    while (queue.length > 0) {
      const { row, col } = queue.shift();
  
      // Check if we've reached the exit
      if (row === RowsNumbers - 1 && col === ColumnNumbers - 1) {
        return true;
      }
  
      // Mark as visited and enqueue neighbors
      if (!visited.has(`${row},${col}`)) {
        visited.add(`${row},${col}`);
        CheckTopCell(row, col);
        CheckBottomCell(row, col);
        CheckLeftCell(row, col);
        CheckRightCell(row, col);
      }
    }
  
    function CheckTopCell(row, col) {
      if (row > 0 && maze[row - 1][col] === 0) {
        queue.push({ row: row - 1, col });
      }
    }
  
    function CheckBottomCell(row, col) {
      if (row < RowsNumbers - 1 && maze[row + 1][col] === 0) {
        queue.push({ row: row + 1, col });
      }
    }
  
    function CheckLeftCell(row, col) {
      if (col > 0 && maze[row][col - 1] === 0) {
        queue.push({ row, col: col - 1 });
      }
    }
  
    function CheckRightCell(row, col) {
      if (col < ColumnNumbers - 1 && maze[row][col + 1] === 0) {
        queue.push({ row, col: col + 1 });
      }
    }
  
    return false;
  }
  
  const Arr = [
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
];
  console.log(canExit(Arr));