"use strict";
// destructing details
{
    //Object destructring
    const user = {
        id: 2047,
        name: {
            firstName: 'Rasel',
            lastName: 'Chowdhury'
        },
        contact: '01834945',
        address: 'Bangladesh'
    };
    const { contact, name: { firstName: fName } //set fName of firstName.it called name alias
     } = user;
    //Array Destructuring
    const friends = ['jabed', 'nazrul', 'rajesh', 'obishek', 'durjoy'];
    //now i want to best friend rajesh catch
    const [, , bestfrined] = friends;
    console.log(bestfrined); //output will be rajesh
    //if i want others elements recive after rajesh then use ...rest
    const [, , bestfri, ...rest] = friends;
}
