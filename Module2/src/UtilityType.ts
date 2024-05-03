{
    //Utility Type
    //Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name  = Pick<Person, 'name' | 'age' | 'email'>

    //Omit ---> bad deowa
    type ContactInfo = Omit<Person, 'name' | 'age'>

    //Required -> all value do required
    type PersonRequired = Required<Person>

    //Partial -> all value do optional
    type PersonPartial = Partial<Person>

    //ReadOnly -> all property value can not change
    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: 'mr. x',
        age: 29,
        contactNo: '019000000'
    }

    //person1.name = 'mr. y'//we can not change value.becouse this property is read only

    //Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }
    
    //Record<key, valuetype>
    type MyObj = Record<string,string | number>

    const emptyObj: Record<string, unknown> = {}


    const obj1: MyObj = {
        a: 'hello',
        b: 'world',
        c: 'Bangladesh',
        d: 1971
    }
}