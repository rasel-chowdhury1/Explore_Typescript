"use strict";
//Basic Data Type
//string
//It is called Implict data type
let firstName = 'Rasel';
// It is called Explict data type
let lastName = 'Chowdhury';
//number
let age = 25;
// boolean
let isAdmin = true;
//undefined
let x = undefined;
//null 
let y = null;
//Any type
let z; //when we are not assing value or define data type.then typescript Inference-> this value will be anytype.
let xyz;
xyz = 10;
//Array
let friends = ['rajesh', 'kowshik'];
let roll = [1, 2, 3, 4];
// tuple -> array -> order -> type of values
let coordinats = [1, 5];
let ageName = [25, 'Rasel'];
ageName[0] = 26;
console.log(ageName[0]);
