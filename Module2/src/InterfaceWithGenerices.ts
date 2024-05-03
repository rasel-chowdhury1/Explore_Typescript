{
//Interface with generices 

interface Developer<T, X=null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number
    };
    smartWatch: T;
    bike?: X
}


interface ShaoimiWatch {
    brand: string;
    model: string;
    display: string;
}
const poorDeveloper: Developer<ShaoimiWatch> = {
    name: 'rasel',
    computer: {
        brand: 'Asus',
        model: 'xyx',
        releaseYear: 2017
    },
    smartWatch: {
        brand: 'shaoimi',
        model: 's-2134',
        display: 'amoled'
    }
}

interface AppleWatch{
    brand: string;
    model: string;
    display: string
}

interface YamahaBike{
    brand: string;
    engineCapacity: string;
}

const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'rasel',
    computer: {
        brand: 'Mac',
        model: 'xyx',
        releaseYear: 2017
    },
    smartWatch: {
        brand: 'Apple Watch',
        model: 'A-2134',
        display: 'amoled'
    },
    bike: {
        brand: 'Yamaha',
        engineCapacity: '150cc'
    }
}



}