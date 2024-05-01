{


// Explore Ternary || Optional Chaining || Nullish coalescing Operator

const age: number = 15;

if (age >=18){
    console.log('adult')
}
else {
    console.log('not adult')
}

//ternary operator == condition ? true : false;
const isAdult = age >= 18 ? 'adult' : 'not adult';
console.log({isAdult})

//optional operator == ?.
type User = {
    id: number;
    name: {
        fristName: string;
        middleName?: string;
        lastName: string;
    }
    contactNo: string;
    address: string;
}
const user : User = {
    id: 203,
    name: {
        fristName: 'rasel',
        lastName: 'chowdhury'
    },
    contactNo: '01800000',
    address: 'ctg'
}

const value = user?.name?.middleName ?? 'No middle value';

console.log({value})

//Nullish Coalescing Operator = ?? -> this is working null and undefined
// null / undefined -----> decission making

const isAuthenticate = false;

const result1 = isAuthenticate ?? 'guest'

console.log(result1)


 
}
