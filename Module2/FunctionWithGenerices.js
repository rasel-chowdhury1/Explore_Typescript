"use strict";
{
    // Function with generices
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGenerices = (param) => {
        return [param];
    };
    const res1 = createArray('Bangledesh');
    const resGenerices = createArrayWithGenerices("Bangladesh");
    const res2Generices = createArrayWithGenerices({
        name: 'rasel',
        age: 26
    });
    // Function with tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resTuple = createArrayWithTuple(101, {
        name: 'rahul',
        age: 28
    });
    const addCourseToStudent = (student) => {
        const course = 'Next level web developer';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'Mr. X', email: 'x@gmail.com', dev: 'next level developer' });
    const student2 = addCourseToStudent({ name: 'Mr. Y', email: 'Y@gmail.com', hasWatch: {
            model: 'Apple Watch',
            price: 35000
        } });
}
