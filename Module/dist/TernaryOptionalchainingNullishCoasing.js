"use strict";
var _a, _b;
{
    // Explore Ternary || Optional Chaining || Nullish coalescing Operator
    const age = 15;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    //ternary operator == condition ? true : false;
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });
    const user = {
        id: 203,
        name: {
            fristName: 'rasel',
            lastName: 'chowdhury'
        },
        contactNo: '01800000',
        address: 'ctg'
    };
    const value = (_b = (_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.middleName) !== null && _b !== void 0 ? _b : 'No middle value';
    console.log({ value });
    //Nullish Coalescing Operator = ?? -> this is working null and undefined
    // null / undefined -----> decission making
    const isAuthenticate = false;
    const result1 = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : 'guest';
    console.log(result1);
}
