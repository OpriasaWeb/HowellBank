var acc_num = 2254885698;
var quit = 0;
var fullname = "Jeremy Opriasa";
var balance = 1000;
const interest = 0.04;
var deposit = 10500;
var currentbalance = 0;
var year = 2;

console.log("WELCOME to Howell Bank!");
console.log("Good day, Mr." + fullname + "!");
console.log("Your current balance: " + balance);
console.log("Deposited amount: " + deposit);
console.log("Processing.... please wait.");

var totalBalance = balance + deposit;

console.log("Your balance now: " + totalBalance);
console.log("Interest rate per year: ");
while(acc_num != quit){
  // balance = balance + (deposit * interest);
  currentbalance = deposit + (deposit * interest);
  console.log("Year 1 - " + currentbalance);
  
  while(year <= 20){
    currentbalance = currentbalance + (deposit * interest);
    console.log("Year " + year + " - " +currentbalance);
    year = year + 1;
  }

  acc_num = quit;

}
