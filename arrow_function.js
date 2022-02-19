function add(num1,num2){
        // const sum=num1+num2;
        // return sum
      return num1+num2-num1+num2*num1;
        // return sum
}
console.log(add(15,17))

// document.getElementById('my-btn').onclick=function handleEvent(){

// }
// function expresion
const add2 = function add2(num1,num2){
        // return num1+num2;
        return add(num1,num2)
}
// // function expresionannonymus function
const add3 = function (num1,num2){
        // return num1+num2;
        return add2(num1,num2)
}

console.log(add2(15,16))
console.log(add3(15,1))


// arrow function
const add4=(num1,num2)=>add(num1,num2);

console.log(add4(32,33))
