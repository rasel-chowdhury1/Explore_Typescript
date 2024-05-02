{
    // Interface
    // it is like of type alias.but sintactly and logically some difference.we can all primitive type using type alias but con not use interface.however we can object type use of type alias.Interface is just workinng in object

    // explore difference in type alias vs interface
    
    //type alias
    type User1 = {
        name: string;
        contactNo: string;
        age: number;
    }
    
    //it is called intersection -> &
    type UserWithRole = User1 & {role: string}

    const user1I: UserWithRole = {
        name: 'rasel',
        contactNo: '016000000',
        age: 26,
        role: 'admin'
    }

    const user1: User1 = {
        name: 'rasel',
        contactNo: '016000000',
        age: 26,
    }

    //Interface
    interface User2 {
        name: string;
        contactNo: string;
        age: number;
    }

    interface UserWithRole2 extends User2{
        role: string;
    }

    const user2I : UserWithRole2 = {
        name: 'rasel',
        contactNo: '016000000',
        age: 26,
        role: 'admin'
    }

    const user2: User2 = {
        name: 'rasel',
        contactNo: '016000000',
        age: 26
    }

    // We know in javascript,
    // 1-> object of object
    // 2-> array of object
    // 3-> function of object
    
    //using type alias in array
    type Roll1 = number[];

    const roll1: Roll1 = [10,30,20];
    
    //using interface in array
    interface Roll2 {
        [index: number] : number
    }

    const roll2: Roll2 = [10,20,30];

    //using type alias in function
    type Sum = (num1: number, num2: number) => number;

    const sum : Sum = (num1,num2) => num1+num2
    
    //using interface in function
    interface Multiply {
        (num1: number, num2:number) : number
    }

    const multiply: Multiply = (a, b) => a*b;




}