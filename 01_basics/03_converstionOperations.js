

// Conversion to the number.... 

// let score = "95" // check for undefined / true / false / "Ravi"
// console.log(score ,  typeof score)
// let scoreInNumber = Number(score) 
// console.log(scoreInNumber , typeof scoreInNumber );

// let score1 = null
// console.log(score1 ,  typeof score1)
// let score1InNumber = Number(score1) 
// console.log(score1InNumber , typeof score1InNumber);

// let score2 = "95abc"
// console.log(score2 ,  typeof score2)
// let score2InNumber = Number(score2) 
// console.log(score2InNumber , typeof score2InNumber);


/* Note : 

    "95" => 95
    "95xys" => NaN
    true => 1 , false => 0
    null => 0

*/


// conversion to the boolean 

// let isLoggedIn = null  // check for 0 , 23 , "Ravi", "" ,  NaN , undefined , null
// console.log(isLoggedIn , typeof isLoggedIn)
// let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolIsLoggedIn , typeof boolIsLoggedIn);


/* Note: 
    1 => true
    23 => true
    "Ravi" => true 

    0 => false
    "" => false
    NaN => false
    undefined => false 
    null => false
*/


// Conversion to String 

let num = 25 // check for NaN , null , undefined , true , false 
console.log(num , typeof num)
let string = String(num)
console.log(string , typeof string)

/* Note : 

    25 => "25"
    Nan => "NaN"
    null => "null"
    undefined => "undefined"
    true => "true"
    false => "false"


*/


