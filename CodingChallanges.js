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
