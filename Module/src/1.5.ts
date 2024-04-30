//Reference Type ----> Object

const user: {
    company: 'Programming Hero'; //Type ---> literal type
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: 'rasel',
    isMarried: false,
    lastName: 'chowdhury'
}

console.log(user.middleName);