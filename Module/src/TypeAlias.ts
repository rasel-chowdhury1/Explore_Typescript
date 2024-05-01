{
    // Type Alias
    
    //we should when use type then first character capital
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    } 

    const student1: Student
    = {
        name: 'Rasel',
        age: 26,
        gender: 'Male',
        contactNo: '01800000',
        address: 'ctg'
    }

    const student2: Student = {
        name: 'Sayed',
        age: 26,
        gender: "Male",
        address: 'Dhaka'
    }
    

    type UserName = string;
    type IsAdmin = boolean;

    // function type structure 
    type Add = (x: number, y: number) => number;

    const add : Add = (num1, num2) => num1 + num2;

    console.log(add(10,30))

    
}