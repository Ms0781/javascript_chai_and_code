const accountId = 12345
let accountEmail = "ms@google.com"
var accountPassword = "123"
accountCity = "Jaipur"
let accountState;

//accountId = 1234  //after assigning one time you can't assign value to constant variable. ///Not allowed.

accountEmail = "ms1@google.com"
accountPassword = "abc"
accountCity = "Ahmedabad"


/*
Preferred not to use var because of issue in block scope and functional scope
*/

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])

/*
if you only declare variable and not assigned value then it store as undefined.
*/