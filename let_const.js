//break up with var
let balance =1240;

balance=1340;

const userName ='tejefjd'

const weTogether ='ami' + userName
// userName=5
console.log(weTogether)

const numbers=[45,23,90,60];
// numbers=[99,15,45] not allow
numbers.push(10);
numbers[2]=345;

const student ={roll:101,name:'anam',job:'inter'}

student.name='tonmoy'
console.log(student)
let sum=0;

for(let i=0; i<numbers.length; i++){
        const number =numbers[i];
        sum=sum+number
        console.log(number);
        console.log(sum)
}