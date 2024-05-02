{
    // Function with generices

    const createArray = (param: string) => {
        return [param];
    }

    const createArrayWithGenerices = <T>(param: T) => {
        return [param]
    }

    const res1 = createArray('Bangledesh');
    const resGenerices = createArrayWithGenerices<string>("Bangladesh");

    type User = {
        name: string;
        age: number
    }

    const res2Generices = createArrayWithGenerices<User>({
        name: 'rasel',
        age: 26
    })


    // Function with tuple
    const createArrayWithTuple = <T,Q>(param1: T, param2: Q) : [T,Q] => {
        return [param1, param2]
    }
    
    type Profile = {
       name: string;
       age: number
    }

    const resTuple = createArrayWithTuple<number,Profile>(101, {
        name: 'rahul',
        age: 28
    })

    const addToCourse = <T>(student: T) => {
        const course = 'Next level web developer';

        return {
            ...student,
            course
        }
    }

    const student1 = addToCourse({name: 'Mr. X', email: 'x@gmail.com', dev:'next level developer'})
    const student2 = addToCourse({name: 'Mr. Y', email: 'Y@gmail.com', hasWatch: {
        model: 'Apple Watch',
        price: 35000
    }})




}   