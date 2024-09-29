///Primitive Data type

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const score1 = 100.3 // Numbers

const isLoggedIn = false; // boolean
const outsideTemp = null; //Null type

let userEmail; //undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 12345671234456789321n; //BigInt because value is greater then 2^53

//Reference Type (Non - Premetive Data Type)

// Types : Array,Objects,Functions

const arrays = ["MS","Hello"]

let myObject = {
    name : "MS",
    age : 25
}

//function declaration
const function1 = function(){
    console.log("Hello World");
    
};



///RETURN TYPE OF VARIABLE 
console.log(typeof function1); //this will return type of function1