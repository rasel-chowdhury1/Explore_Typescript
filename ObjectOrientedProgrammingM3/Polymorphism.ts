{
    //Polymorphism
   // when change parent class method in child class it is called polymorphism
    class Person{
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(){
            console.log('Normal person sleeping 8 hours per day')
        }
    }

    class Student extends Person {

        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
        
        // we can getSleep method call polymorphism
        getSleep(){
            console.log('Student sleeping 7 hours per day')
        }
    }

    class Developer extends Person{
        constructor(name: string, age: number, address: string){
            super(name,age,address)
        }
        
        // we can getSleep method call polymorphism
        getSleep() {
            console.log('Developer sleeping 6 hours per day')
        }
    }

    const person1 = new Person('rahul',27, 'ctg');
    person1.getSleep()

    const student1 = new Student('rohit', 11, 'mohora');
    student1.getSleep()

    const developer1 = new Developer('sayed', 28, 'dhaka')
    developer1.getSleep()

    // const getSleepingPerday = (param: Person) => {
    //     param.getSleep()
    // }

    // getSleepingPerday(person1);
    // getSleepingPerday(student1);
    // getSleepingPerday(developer1);
}