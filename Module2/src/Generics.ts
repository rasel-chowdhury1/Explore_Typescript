{
    // Generics
    // what is generics?
    // generice is a reusable block of code

    type GenericsArray<T> = Array<T>

    const numberList: number[] = [30,20,50];
    //above code using generices
    const numberListGenerics: Array<number> = [30,50,20];
    //dynamic generices
    const numberListGenericsDynamic : GenericsArray<number> = [30,50,20];

    const nameList: string[] = ['x', 'y', 'z'];
    //above code using generices
    const nameListGenerics: Array<string> = ['x', 'y', 'z'];
    //dynamic generices
    const nameListGenericsDynamic: GenericsArray<string> = ['x', 'y', 'z'];

    const boolList: boolean[] = [true, false, true];
    //above code using generices
    const boolListGenerics: Array<boolean> = [true, false, true];
    //dynamic Generices 
    const boolListGenericsDynamic: GenericsArray<boolean> = [true, false, true];

    const userList: GenericsArray<{name: string, age: number,contactNo: string}> = [
        {
            name: 'rasel',
            age: 26,
            contactNo: '0190000'
        },
        {
            name: 'piklu',
            age: 45,
            contactNo: '0189899999'
        }
    ]

    type GenericsTuple<x,y> = [x, y];

    const couple: GenericsTuple<string,string> = ['Mr. x', 'Mr. y'];

    const userWithId: GenericsTuple<number, {name:string, age:number, address: string}> = [101, {name: 'x', age: 10, address: 'ctg'}]



}