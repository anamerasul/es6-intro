// const add = (num1,num2)=>num1+num2;

const add =(num1,num2)=>num1+num2;

const sum=add(22,90);
console.log(sum);

const multiply=(num1,num2,num3)=>num1*num2*num3

const sum2=multiply(1,2,3);

console.log(sum2)

const fiveTimes=(num)=>num*5;

const output= fiveTimes(12)



console.log(output)

const tenTimes=num=>num*10;

const output2=tenTimes(14);

console.log(output2);
const getName =()=>'brandom sam';

const name =getName();

console.log(name)
const myname='anam'
const getName2 =()=>`${myname}`;

const name2 =getName2();

console.log(name2);

const doMath=(x,y)=>{
        const sum =x+y;
        const diff=x-y;
        const result=sum/diff;
        const output=result*diff;

        return output
}

console.log(doMath(2,1))

// document.getElementById('myname').addEventListener(event=>{

// })