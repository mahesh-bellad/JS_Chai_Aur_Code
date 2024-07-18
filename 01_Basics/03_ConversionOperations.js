let score = 33;                           // Number Datatype

console.log(typeof score);                // checking Datatype
console.log(typeof (score));

let valueToString = String(score);        // converting Number Datatype to String
 
console.log(typeof valueToString);        // String 
console.log(valueToString);               // 33


//===============================================================//


let score1 = "33";                        // String Datatype

console.log(typeof score1);                // checking Datatype
console.log(typeof (score1));

let valueToNumber1 = Number(score1);      // converting String Datatype to Number

console.log(typeof valueToNumber1);       // Number 
console.log(valueToNumber1);              // 33


//===============================================================//


let score2 = "33abc";                    // String Datatype

console.log(typeof score2);              // checking Datatype
console.log(typeof (score2));

let valueToNumber2 = Number(score2);      // converting String Datatype to Number

console.log(typeof valueToNumber2);       // Number
console.log(valueToNumber2);              // NaN


//===============================================================//


let score3 = null;                       // null Datatype

console.log(typeof score3);              // checking Datatype
console.log(typeof (score3));

let valueToNumber3 = Number(score3);      // converting null Datatype to Number

console.log(typeof valueToNumber3);       // Object
console.log(valueToNumber3);              // 0


//===============================================================//


let score4 = "Mahesh";                    // String Datatype

console.log(typeof score4);               // checking Datatype
console.log(typeof (score4));

let valueToNumber4 = Number(score4);      // converting String Datatype to Number

console.log(typeof valueToNumber4);       // Number
console.log(valueToNumber4);              // NaN


//===============================================================//


let isLoggedIn = "";                           // Number Datatype
  
console.log(typeof isLoggedIn);               // checking Datatype
console.log(typeof (isLoggedIn));

let valueToBoolean = Boolean(isLoggedIn);      // converting Number Datatype to Boolean

console.log(typeof valueToBoolean);           // Boolean
console.log(valueToBoolean);                  // True

// 1 ==> True, 0 ==> False, "mahesh" ==> False, "" ==> False



