const numberOne=[1,3,56,467,89];

// console.log(numberOne);

// console.log(...numberOne);

// const numbertwo=[1,6,56,46,898];

// console.log(numberOne)

// use ...

const max=Math.max(...numberOne)
console.log(max)


// const numbertwo=numberOne;
// numberOne.push(55);

// console.log(numbertwo)
// const numbertwo=[numberOne];
// numberOne.push(55);

// console.log(numbertwo)
const numbertwo=[24,...numberOne, 88,67];
numberOne.push(55);

console.log(numbertwo)
console.log(numberOne)