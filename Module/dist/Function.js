"use strict";
//learn function 
//Normal function
//Arrow function
//add function recive 2 parameters(num1, num2) and return (: number) number
// when you need set parameter default value then use = value
function add(num1, num2 = 10) {
    return num1 + num2;
}
const addArrow = (num1, num2 = 10) => num1 + num2;
//object -> function -> method
const poorUser = {
    name: "rasel",
    balance: 0,
    addBalance(bal) {
        this.balance += bal;
        return `successfully added ${bal} take in your balance and your current balance is ${this.balance}`;
    },
    showBalance() {
        return `your currently balace exist ${this.balance}`;
    }
};
add(10, 20);
