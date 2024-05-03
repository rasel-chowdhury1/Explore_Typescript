"use strict";
{
    //Type Assertion || Narrowing
    // if as a developer,better understand and declear of typescript it is called type assertion
    let anything;
    anything = 'I am next level developer';
    anything;
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedToGm = parseFloat(value) * 1000;
            return `this value ${value} gm will be ${convertedToGm}`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(10);
    const result2 = kgToGm('10');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
