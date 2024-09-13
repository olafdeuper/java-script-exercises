function welcomeMsg(strg_name) {
    return "Welcome " + strg_name + " !";
}

function calcGrossPrice(i_price, f_tax) {
    return i_price + (i_price * f_tax);
}

function addPositive(num1, num2){
    return  Math.abs(num1) + Math.abs(num2);
}



console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Horst"));

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

console.log(addPositive(2,3));
console.log(addPositive(3,-5));
console.log(addPositive(-1,-8));
console.log(addPositive(-3,5));
