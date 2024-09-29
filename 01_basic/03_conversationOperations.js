
console.log("-----Number Conversion ------");

let numberValue1 = "33"
let numberValue2 = null
let numberValue3 = undefined
let numberValue4 = true

console.log("value is\t" + Number(numberValue1) + "\tType is " + typeof Number(numberValue1));
console.log("value is\t" + Number(numberValue2) + "\tType is " + typeof Number(numberValue2));
console.log("value is\t" + Number(numberValue3) + "\tType is " + typeof Number(numberValue3));
console.log("value is\t" + Number(numberValue4) + "\tType is " + typeof Number(numberValue4));


//Conversion : 

//"33" => 33 
//"33abc" => value will be NaN (Not a number) but type is number
//true => 1 ; false => 0

console.log("---BOOLEAN CONVERSION----");

let numberValue5 = 1
let numberValue6 = 0
let numberValue7 = ""
let numberValue8 = "MS"


console.log("value is\t" + Boolean(numberValue5) + "\tType is " + typeof Boolean(numberValue5));

console.log("value is\t" + Boolean(numberValue6) + "\tType is " + typeof Boolean(numberValue6));

console.log("value is\t" + Boolean(numberValue7) + "\tType is " + typeof Boolean(numberValue7));

console.log("value is\t" + Boolean(numberValue8) + "\tType is " + typeof Boolean(numberValue8));


//0 => convert into boolean means false
// 1 => true
// ""(Empty String) => false
// "affb" (String with value ) => true

console.log("----String Conversion----");

let number1 = 33

console.log("value is\t" + String(numberValue8) + "\tType is " + typeof String(numberValue8));



// ------ OPERATIONS ----
let value = 3
let negValue = -value
console.log(negValue)

let a = 2;
let b = 3;
console.log(a +b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b) //a power b
console.log(a%b) ///remainder


//string  concatination
let str1 = "MS"
let str2 = " Shaikh"
let str3 = str1 + str2

console.log(str3);


//string number expression confusion :

/*
 
Javascript evaluate expression from left to right 
so in first example 4 and 3 will treat as number until they reach MS so result will be 7MS
in secon example first operand is string then rest operand treat as string so result will be MS43
*/

console.log(4 + 3 + "MS"); //output : 7MS

console.log("MS" + 4 + 3); //output : MS43


//prefix and post fix operations

// prefix : ++x
//postfix : x++

let x = 1;

console.log(++x); //x will be 2 because prefix first increment value and after that return final value
console.log(x++); //postfix will return first value x and after that it will increase value this will print 2
console.log(x); // this will print 3








