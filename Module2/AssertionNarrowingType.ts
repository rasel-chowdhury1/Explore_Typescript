{
//Type Assertion || Narrowing

let anything: any;
anything = 'I am next level developer';

(anything as string)

const kgToGm = (value: string | number) : string | number | undefined => {
    if(typeof value === 'string'){
        const convertedToGm = parseFloat(value) * 1000;
        return `this value ${value} gm will be ${convertedToGm}`
    }
    else if(typeof value === 'number') {
        return value*1000;
    }
}

const result1 = kgToGm(10) as number;
const result2 = kgToGm('10') as string;

type CustomError = {
    message: string;
}


try {
    
} catch (error) {
    console.log((error as CustomError).message)
}



}