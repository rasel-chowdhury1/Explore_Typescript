"use strict";
{
    const getProperty = (obj, pro) => {
        return obj[pro];
    };
    const user = {
        name: 'rasel',
        age: 26,
        address: 'ctg'
    };
    const car = {
        model: 'Toyta',
        price: 200000
    };
    const result1 = getProperty(user, "age");
    const result2 = getProperty(car, 'model');
}
