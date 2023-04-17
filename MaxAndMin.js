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