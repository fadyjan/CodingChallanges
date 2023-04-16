debugger

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

