debugger;

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