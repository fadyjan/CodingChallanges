//1 Get Min Value using OneLine
/* var arr = [10,20,30,-2,-30,0]
console.log(Math.min(...arr))*/

//2 Get Min Value from Array Long Solution
/* function min(Arr) {
  var minVal = 0 ;
  for (let x = 0; x < Arr.length-1; x++) {
    if (Arr[x] < minVal) {
      minVal = Arr[x];
    }
  }
  return minVal;
}
console.log (min([-10, -20, -30, 0, 20]))
*/

//3 get max value using max value with oneline
/*let arr = [10,20,30,0,-40]
console.log(Math.max(...arr))*/

//4 get max value from array Long Soultion
/* function max (Arr){
    var maxval = 0 ;
    for(var x = 0 ; x<Arr.length;x++){
        if (Arr[x]> maxval) {
            maxval= Arr[x]
        }
    }
    return maxval
}
 console.log(max([10,20,-20,0,99]))*/

//5 Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

/*let NameAsString = 'Sam Harris'
let NameAsArray = NameAsString.split(" ")
let initialName = NameAsArray[0][0].toUpperCase() + "." + NameAsArray[1][0].toUpperCase()
console.log(initialName)*/

//6 This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
/*var num = 7
if (num % 2 === 0) {
    //number is even
    num = num *8
} else {
    //number is odd 
    num = num *9
}*/

//8Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
/*function invert(array) {
  invertedArray = array.map((el) => {
    if (el != 0) {
      return el * -1;
    } else {
      return 0;
    }
  });
  return invertedArray;
}

console.log(invert([]));
*/

//9 Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
/*function smash (words) {
  var str = words.join(" ")
    return str
 };

 smash([])*/

//10 Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

/* function sumArray(array) {
    //Sort the array so i can remove the most and least values from it latter 
   array= array.sort(function(a, b){return a-b})

   array.shift()
   array.pop()

   let sumArry = array.reduce((result,item)=>{
    return result + item;
   },0)

   console.log(sumArry)
 }

 sumArray([ -6, -20, -1, -10, -12 ])*/

//11 Given an array of integers, return a new array with each value doubled.
/*function maps(arr){
    let doubledArr = arr.map(el=>{return el*2})
    return doubledArr
}*/

//12 A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?Return True if yes, False otherwise :)

/*function hero(bullets, dragons) {
  //Get Coding!
  let requiredBullets = dragons * 2;
  if (bullets >=requiredBullets) {
    return true
  } else {
    return false
  }
 
}

hero(10, 5)*/

//13 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

/*function makeNegative(num) {
    // Code
    if(num > 0 ){
        return num *-1

    }else return num 
}*/

//14 Given an array of integers your solution should find the smallest integer.
/*function findSmallestInt(arr) {
   return Math.min(...arr)
}

console.log(findSmallestInt([78,56,232,12,8]))*/

//15 You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.For example, when the input is green, output should be yellow.
/* function updateLight(current) {
  var nextColor;
  switch (current) {
    case "green":
      nextColor = "yellow";
      break;

    case "yellow":
      nextColor = "red";
      break;
    case "red":
      nextColor = "green";
      break;

    default:
      break;
  }
  return  nextColor
}
console.log(updateLight("green")) */

/*     function UpdateLight(current){
     var next ={green: 'yellow',yellow: 'red',red: 'green'}[current]
     return next
    } */

//16 Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

/* var summation = function (num) {
    // Code here
    var initialNum = 1 ;
    var sum = 0
    for (let x = 0; x <= num; x++) {
        sum = sum+x
        
    }
}


console.log(summation(8))  */
//17 We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

/* function points(games) {
  var TotalPoints =  0;
  games.forEach(game => {
      let match = game.split(':')
      if (  match[0] > match[1]) {
        TotalPoints += 3
      } else if(  match[0] == match[1]) {
        TotalPoints += 1
      }
    
  });
  return TotalPoints
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) */

//18 Given an integral number, determine if it's a square number:
/* var isSquare = function(n){
    if (n<0) {
      return false
    } else{
     return Number.isInteger(Math.sqrt(n))
    } 
} */

//19 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
/* function countSheeps(arrayOfSheep) {
 let trueValues =  arrayOfSheep.filter((element)=>{ return element === true})
 return trueValues.length
} */

//20 You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

/*  function getMiddle(s){
  // detect first if the number of letters is odd or even 
  debugger
    if (s.length % 2 === 0) {    // If num is divisible by 2
      return s[(s.length/2)-1] + s[(s.length/2)]  
    } else {
     return s[Math.round(s.length)-1]
    }
  

}

console.log( getMiddle("test")) */

//21 Make a program that filters a list of strings and returns a list with only your friends name in it.If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

/* function friend(friends){
  //your code here
   let Myfriends = friends.filter((name)=>{return name.length == 4})
   return Myfriends
} */

//22 There is a bus moving in the city which takes and drops some people at each bus stop.

//You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

//Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

//Take a look on the test cases.

//Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

/* var number = function(busStops){
  let number = 0
  busStops.map((ArrayElement)=>{
    number = number + (ArrayElement[0]-ArrayElement[1])
  })
  // Good Luck!
  return number
} */

/* var number = function(busStops){
 let sum =  busStops.reduce((result,num)=>{
   return result + (num[0]-num[1])
  },0)
  return sum 
}

console.log(number([[10,0],[3,5],[5,8]])) */

//23 Remove first char concat it with 'ay' then add them to the end of string
/* function pigIt(str){
  let wordsArray = str.split(" ")
  const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

let newArray =  wordsArray.map((word)=>{
  if (regex.test(word)) {
    let firstChar = word.charAt(0)
    let AfterRemoving = word.slice(1)
    let finalWord = AfterRemoving + firstChar + 'ay'
    return finalWord
  } else {
    return word
  }

  })
  return newArray.join(" ")
  //Code here
}

pigIt('Pig latin is cool') */

//24 Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// function inArray(array1, array2) {
//   let selectedArray = [];
//   array1.map((subStr) => {
//     array2.map((mainStr) => {
//       if (mainStr.includes(subStr) && !selectedArray.includes(subStr)) {
//           selectedArray.push(subStr);
//       }
//     });
//   });
//   return selectedArray.sort();
// }

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// a1 = ["xyz", "live", "strong"];
// console.log(inArray(a1, a2));

// a1 = ["live", "strong", "arp"]
// inArray(a1, a2)

// a1 = ["tarp", "mice", "bull"]
// inArray(a1, a2)

//25 Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// function digPow(n, p) {
//   currentPower = p;
//   const digits = n.toString().split("").map(Number);
//   let FinalResult = 0;
//   digits.map((number) => {
//     FinalResult = FinalResult + (number ** currentPower)
//     currentPower++;
//   });
//   return Number.isInteger(FinalResult / n) ? FinalResult / n : -1;
// }
// console.log(digPow(89, 1))
// console.log(digPow(92, 1))
// console.log(digPow(46288, 3))

//26  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   let filteredArray = l.filter((el)=>{return typeof(el) === 'number'})
//   return filteredArray
// }

// filter_list([1,2,'a','b'])

//Linked List

// const linkedList = {
//   head: {
//     values: 6,
//     next: {
//       value: 8,
//       next: {
//         value: 10,
//         next: {
//           values: 12,
//           next: null,
//         },
//       },
//     },
//   },
// };

// class linkedList {
//   constructor(head = null) {
//     this.head = head;
//   }

//   size() {
//     let counter = 0;

//     while (this.head) {
//       counter++;
//       this.head = this.head.next;
//     }
//     return counter;
//   }

//   clear() {
//     this.head = null;
//   }

//   getLast() {
//     LastNode = this.head;
//     if (LastNode.next) {
//       while (LastNode.next) {
//         LastNode = LastNode.next;
//       }
//     }
//     return LastNode;
//   }

//   getFirst() {
//     return this.head;
//   }
// }

// class ListNode {
//   constructor(data) {
//     this.data = this.data;
//     this.next = null;
//   }
// }

// //Create Some Nodes instance
// let n1 = new ListNode(2);
// let n2 = new ListNode(4);
// n1.next = n2;
// //Create One LinkedList to hold these nodes

// let Linkedlist = new linkedList(n1);

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// function AddUp(intarray,target) {
//   let flag,firstElement,substract

//   for (x = 0; x < intarray.length; x++) {

//     firstElement = intarray[x]
//     substract = target - firstElement

//     flag = intarray.includes(substract)

//     if (flag) {
//       break
//     }

//   }

//   if(flag){
//     return [firstElement,substract]
//   }else{
//     return "this compination can't be done "
//   }

// }

// console.log(AddUp([1,2,3,4],6))

//Reverse an array(String) by using only loops

// function ReverseArray(str) {
//   let ReversedStr = ''

//   for (let x = str.length - 1; x >= 0; x--) {
//     ReversedStr = ReversedStr + str[x]

//   }
//   return String(ReversedStr)

// }

// console.log(ReverseArray('ydaf'))

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// function findDuplicate(arr) {

//   for (let x = 0; x < arr.length; x++) { // O(n)
//     for (let i = x +1; i < arr.length; i++) { //O(n)
//       if (arr[i] === arr[x]) {
//         return true
//       }
//     }

//   }
//   return false
// }
// //O(n^2)
// console.log(findDuplicate([1, 2, 3,1]));

// given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

// function CompareArrays(arr1, arr2) {
//    ComparedArray = arr1.filter((element) => arr2.includes(element));
//   if(ComparedArray.length > 0){
//     return true
//   }else{
//     return false
//   }
// }

// const arr1 = ["a", "b", "c", 3];
// const arr2 = ["a", "bb", 3, "dd"];

// console.log(CompareArrays(arr1, arr2)); // But this Soultion is COmplixity of O(arr1*arr2)
//So let't try another solution

// function CompareArrays(arr1, arr2) {
// //Convert one array into object
// let mapObject = {}
// arr1.map((element) =>{
//   if (!mapObject[element]) {
//     mapObject[element] = element
//   }
// })

// let filteredArr = arr2.filter((element)=>mapObject[element])

// return filteredArr
// }

// const arr1 = ["a", "b", "c", 3];
// const arr2 = ["am", "bb", 3, "dd"];

// console.log(CompareArrays(arr1, arr2));

// Do Array from scratch
// class MyArray {
//   constructor(){
//     this.length = 0
//     this.data = {}
//   }

//   get(index){
//   return this.data[index]
//   }

//   push(item){
//       this.data[this.length] = item
//       this.length ++
//   }

//   pop(){
//     delete this.data[this.length-1]
//     this.length --
//   }
// }

// arr = new MyArray()
// arr.push("hello")
// arr.push('HI')

// console.log(arr.length)

//30 Reverse string
// function Reverse(str){
//   return str.split("").reverse().join('')

// }
// var str = "Hello"
// console.log(Reverse(str));

//31 Merge Sorted array
// const arr1 = ['apple', 'banana', 'cherry'];
// const arr2 = ['date', 'elderberry', 'fig'];
// const arr3 = ['grape', 'honeydew'];
// const mergedStrArray = arr1.concat(arr2)

// const a = [1,5,8,9]
// const b = [2,9,4,8]
// //Ascending
// const mergedAscArray = a.concat(b).sort((x,y)=> x+y)

// //Desending
// const mergedDescArray = a.concat(b).sort((x,y)=> y-x)

// console.log(mergedStrArray);

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// function twoSum(nums, target) {
//   for (let index = 0; index < nums.length; index++) {
//     let numberNedded = target - nums[index];
//     notMe = index != nums.indexOf(numberNedded);
//     if (nums.includes(numberNedded) && notMe) {
//       return [index, nums.indexOf(numberNedded)];
//     }
//   }

//   return [];
// }

// function twoSum(nums, target) {
//   debugger
//   const object = {}

//   for (let index = 0; index < nums.length; index++) {
//     const Complimentry = target - nums[index]

//     if (Complimentry in object) {
//       return [ object[Complimentry] ,index]
//     }

//     object[nums[index]] = index

//   }

//   // If no solution is found, return an empty array
//   return [];
// }
// let nums = [3, 2, 4],
//   target = 6;
// console.log(twoSum(nums, target));

//32 Given an integer array nums, find the subarray with the largest sum, and return its sum.

// function getMaxSum(arr) {
//   arr = arr.sort();

//   const SortedSet =new Set(arr);
//   const filtredArray = [...SortedSet]
//   return filtredArray[filtredArray.length - 1] + filtredArray[filtredArray.length - 2];
// }

// console.log(getMaxSum([5,4,-1,7,8]));

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// var containsDuplicate = function(nums) {
//   for (let index = 0; index < nums.length; index++) {
//       notCurrent = index != nums.indexOf(nums[index])
//       if (nums.includes(nums[index]) && notCurrent) {
//           return true
//       }
//   }
//   return false
// };

// var containsDuplicate = function(nums) {
//         const obj = {}
//         for (let index = 0; index < nums.length; index++) {

//           if (obj[nums[index]]) {
//               return true
//           }else{
//             obj[nums[index]] = true
//           }
//         }
//         return false
// };

// console.log(containsDuplicate([1,2,3,1]))

//32 Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// var rotate = function(nums, k) {
//     var RotatedElement = nums.splice(nums.length-k ,k)
//     return RotatedElement.concat(nums)
//   };

// console.log(rotate([-1,-100,3,99] ,2))

//34 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.Note that you must do this in-place without making a copy of the array.

// var moveZeroes = function(nums) {
//     debugger
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] ===0 ){
//       nums.splice(index,1)
//       nums.push(0)
//     }
//   }
//   return nums
// };
// console.log(moveZeroes([0,1,0,3,12]))

//35 implement HashTable
// class HashTable {
//   constructor(size){
//     this.data = new Array(size)
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i =0; i < key.length; i++){
//         hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key){
//     const address = this._hash(key);
//     const currentBucket = this.data[address]
//     if (currentBucket) {
//       for(let i = 0; i < currentBucket.length; i++){
//         if(currentBucket[i][0] === key) {
//           return currentBucket[i][1]
//         }
//       }
//     }
//     return undefined;
//   }

//   keys(){
//     debugger
//     const KeysArray =[]
//     for (let index = 0; index < this.data.length; index++) {
//       if ((this.data[index])) {
//         KeysArray.push(this.data[index][0][0])

//       }

//     }
//     return KeysArray
//   }

// }

// const h1 = new HashTable(50)
// h1.set('grappes',1000)
// h1.set('aples',2000)
// console.log(h1.keys())

//36 Find number is Duplicate return it , if not return undifeind
// function FindDuplicate(NumArr){
//   const DummyObj = {}
//   for (let index = 0; index < NumArr.length; index++) {
//     let currentRecord = NumArr[index]

//     if (!DummyObj[currentRecord]) {
//       DummyObj[currentRecord] = true
//     }else{
//       return `The number that duplicated is ${currentRecord}`
//     }

//   }
//   return undefined
// }

// console.log(FindDuplicate([8,5,6,7,8,9,2]))
//Hoisting
// x = 10
// var x  ;
// console.log(x)

//This keyword
// object ={
//   name : "fady",
//   test :()=>{console.log(this)}
// }
// object.test()

// var x=null
// console.log(x)

// Coding Interview
// let x = "fady'
// x.sayHello(); // 'hello fady'

// class Information {
//   constructor(name){
//     this.name = name
//   }

//   sayHello (){
//     console.log(this.name)
//   }
// }

// let object1 = new Information('fady')
// object1.sayHello()

// let array = [1,2,3]

// function MyMap(arr , callbackFunc){
//   const newArray = []
//   //Get array
//   for (let index = 0; index < arr.length; index++) {
//     newArray.push(callbackFunc(arr[index]))

//   }

//   return newArray

// }

// const x = array.map((elem)={
//       element * 2
// })

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// let x = shape.diameter
// x.call(shape)
// console.log(x())

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// First Task :

// Write a function that takes an array of strings of arbitrary dimensionality ([], [][],
// [][][], etc.) and returns the sum of every separate number in each string in the array.

// // Examples
// sum(["1", "five", "2wenty", "thr33"])
// //  36

// sum([["1X2", "t3n"],["1024", "5", "64"]])
// // 1099

// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]])
// // 759

// function sum(array) { // O (n+1+n+n) ==> O(n)
//   array = flattenArray(array) // O (n)
//   let sumArray = [];
//   for (let index = 0; index < array.length; index++) { // O(n)
//       let numbers = detectNumbers(array[index]); //O(1)
//       sumArray.push(...numbers);
//   }
//   return CalculateSum(sumArray); //0(n)
// }

// //Function Responisble for Convert Multi level arrays into one level
// function flattenArray(arr) {
//   let result = [];
//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }

// //Function Responsible for detecting numbers from string
// function detectNumbers(inputStrings) {
//   let numbers = inputStrings.match(/-?\d+(\.\d+)?/g);
//   if (numbers) {
//     return numbers;
//   } else {
//     return ["0"];
//   }
// }

// //Function Responsaible for doing summition process
// function CalculateSum(numArr) {
//   let sum = 0;
//   for (let index = 0; index < numArr.length; index++) {
//     sum += Number(numArr[index]);
//   }
//   console.log(sum);
//   return sum;
// }

//Objetive is to see if there is a valid path from a start to a destination in a maze.
// function canExit(maze) {
//   const RowsNumbers = maze.length;
//   const ColumnNumbers = maze[0].length;

//   const visited = new Set();
//   const queue = [{ row: 0, col: 0 }];

//   while (queue.length > 0) {
//     const { row, col } = queue.shift();

//     // Check if we've reached the exit
//     if (row === RowsNumbers - 1 && col === ColumnNumbers - 1) {
//       return true;
//     }

//     // Mark as visited and enqueue neighbors
//     if (!visited.has(`${row},${col}`)) {
//       visited.add(`${row},${col}`);
//       CheckTopCell(row, col);
//       CheckBottomCell(row, col);
//       CheckLeftCell(row, col);
//       CheckRightCell(row, col);
//     }
//   }

//   function CheckTopCell(row, col) {
//     if (row > 0 && maze[row - 1][col] === 0) {
//       queue.push({ row: row - 1, col });
//     }
//   }

//   function CheckBottomCell(row, col) {
//     if (row < RowsNumbers - 1 && maze[row + 1][col] === 0) {
//       queue.push({ row: row + 1, col });
//     }
//   }

//   function CheckLeftCell(row, col) {
//     if (col > 0 && maze[row][col - 1] === 0) {
//       queue.push({ row, col: col - 1 });
//     }
//   }

//   function CheckRightCell(row, col) {
//     if (col < ColumnNumbers - 1 && maze[row][col + 1] === 0) {
//       queue.push({ row, col: col + 1 });
//     }
//   }

//   return false;
// }

// const Arr = [
//   [0, 1, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0],
//   [1, 0, 0, 0, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 0],
// ];
// console.log(canExit(Arr));
// console.log(x)

// var x =10

// let x = 5;
// let testFunction = () => {
//   setTimeout(() => {
//     console.log("1", x);
//      x = 7;
//     console.log("2", x);
//   }, 0);
// };
// testFunction();
// console.log("3", x);

// 3 5
// 1 7
// 2 7

// 3 5
// 1 7
// 2 7 ()

// let OriginalArr = [1, 2, 3, 4, 5, 3, 6,]

// OriginalArr.filter((number)=> number !== 3)

// const x = { id: 4, name: "aaa" };

// const y = { name: "aaa", id: 4 };

// const compare = (ob1, ob2) => {
//   debugger;

//   const ObStr1 = JSON.stringify(ob1);
//   arrStr1 = ObStr1.split("");
//   arrStr1.sort();
  

//   const ObStr2 = JSON.stringify(ob2);
//   arrStr2 = ObStr2.split("");
//   arrStr2.sort();

//   arrStr1 =arrStr1.join()
//   arrStr2 =arrStr2.join()

//   if (arrStr1 === arrStr2) {
//     return "Tamam";
//   } else {
//     return "MshTmam";
//   }
// };

// console.log(compare(x, y));


// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function revert (str){
  const StrArra = str.split('')
  const length =StrArra.length
  let ResultArr =[]
  for (let index = 0; index < length; index++) {
    let popedChar = StrArra.pop()
     ResultArr.push(popedChar)
    
  }
  return ResultArr.join('');
}

revert('world')