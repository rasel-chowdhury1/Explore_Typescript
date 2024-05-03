"use strict";
{
    //Spread Operator
    //Rest Operator
    //Destructuring
    //learn spread operator
    const bros1 = [
        'hridoy',
        'nazrul',
        'islam'
    ];
    const bros2 = [
        'rajesh',
        'kowshick',
        'shovon'
    ];
    bros1.push(...bros2);
    //object
    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        nextjs: 'tonmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //learn rest operator
    // this function recive just fixed parameter but we want any number parameters recive in this function then use ...rest 
    //when ...rest operator then this function recive list of array []
    const greatFriends = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greatFriends('rajesh', 'shovon', 'kowshick');
}
