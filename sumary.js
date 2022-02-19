const priyoPerson ='ami khai';

let num1 =34;

let num =num1;
console.log(num);
// default parameter
function calculate(x,y,z=1){
        return x+y*z
}

console.log(calculate(2,3,3));

// template string

const myPeople =`my name is ${priyoPerson} his number is ${num} calcilate ${calculate(2,3,4)}`

console.log(myPeople);

// arrow functiom
const getName2=(first,last)=>first+last;

const FiveTimes=x=>x*5;

const bigArrow=(x,y,z)=>{
        const first=x+y;
        const second=x-y;
        const third=first*second;
        const fourth=third/second;
        return fourth
}

const numbers =[2,6,9,12];

const min =Math.min(...numbers);
console.log(min);
