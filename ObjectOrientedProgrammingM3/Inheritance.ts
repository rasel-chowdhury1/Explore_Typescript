{
    //Inheritance --> oop
    class Parent{
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }

    }
    
    //Inherit Parent class in Student child class
    class Student extends Parent{

        constructor(name: string, age: number, address: string){
            super(name, age, address);
        }

    }
    
    //inherit Parent class in Teacher child class
    class Teacher extends Parent{
        designation: string;

        constructor(name: string, age:number, address: string, designation: string){
            super(name,age,address);
            this.designation = designation;
        }

        takeClass(numOfHours:number){
            console.log(`${this.name} will take ${numOfHours} hours`)
        }
    }

    const student1 = new Student('pranto', 13, 'mohora');
    student1.getSleep(8)
    const teacher = new Teacher('Abhi', 32, 'kamal bazar', 'banker');
    teacher.takeClass(10)


}