//Basic Data Type

//string

 //It is called Implict data type
let firstName = 'Rasel';

 // It is called Explict data type
let lastName: string = 'Chowdhury'

//number
let age : number = 25;

// boolean
let isAdmin : boolean = true;

//undefined
let x : undefined = undefined

//null 
let y : null = null;


//Any type
let z; //when we are not assing value or define data type.then typescript Inference-> this value will be anytype.

let xyz: number;

xyz = 10;

//Array
let friends: string[] = ['rajesh', 'kowshik']

let roll: number[] = [1,2,3,4];

// tuple -> array -> order -> type of values

let coordinats : [number,number] = [1,5];

let ageName: [number, string] = [25, 'Rasel'];


ageName[0] = 26;


console.log(ageName[0])