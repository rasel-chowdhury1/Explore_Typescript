"use strict";
{
    // this is called constraint(must pass 3 property(id,name,email) of object)
    const addCourseToStudent = (student) => {
        const course = "Next level Web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 101, name: 'sayed', email: 'sayed@gmail.com', dev: 'next level developer' });
    const student2 = addCourseToStudent({ id: 102, name: 'parvez', email: 'parvez@gmail.com', dev: 'front end developer' });
    //when one or more property pass missing show error
    const student3 = addCourseToStudent({ id: 103, name: "xyz", email: 'xyz@gmail.com' });
}
