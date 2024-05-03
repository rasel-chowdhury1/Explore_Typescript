{
    //Mapped Type
    const arrOfNUmbers: number[] = [1,2,3];

    //const arrOfString: string[] = ['1', '2', '3']; // manually
    const arrOfString = arrOfNUmbers.map(number => number.toString()); // dynamiclly

    type AreaNumber = {
        height: number;
        width: number;
    }
    type Height = AreaNumber['height']; //look up type
    //manually
    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // using mapping type
    // type AreaString = {
    //     // [key in 'height' | 'width'] : string;//manually mapping
    //     // keyof AreaNumber -> 'height' | 'width'
    //     [key in keyof AreaNumber] : string;
    // }

    // T variable recive => {height: string;width: number}
    // key = > T['height'] => T['width']
    type AreaString<T>= {
        
        [key in keyof T] : T[key];

    }

    const area1 : AreaString<{height: string; width: number}> = {
        height: '100',
        width: 50
    }



}