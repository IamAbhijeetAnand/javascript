const accountId = 144553
let accountEmail = "abhijeet@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2   // not allowed

accountEmail = "abc@abc.com"
accountPassword = "122112"
accountCity = "Patna"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
Prrefer not to use var
because of issue in block scope and functional scope
*/