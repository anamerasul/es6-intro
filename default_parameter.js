function add(num1,num2=0){
        // console.log(num2)
        // option 1
        // if(num2==undefined){
        //         num2=0;
        // }

        // option 2

        // num2 =num2||0

        const total=num1+num2;
        // add(33,66)
        return total
       
}

const result= add(15);
console.log(result)

function fullName(firstName,lastName='chowdhuray'){
        const name =firstName+" "+lastName
        return name
}

console.log(fullName('tonmoy' , 'anam'))