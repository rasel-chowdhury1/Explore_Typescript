{
// Conditional type
type a1 = string;
type b1 = undefined;

type X = a1 extends null ? true : false; // conditional type
type Y = a1 extends number ? true : b1 extends string ? true : false; //nested condtional type

type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof Sheikh ? true : false;


type HasCar = CheckVehicle<'car'>
type HasPlane = CheckVehicle<'plane'>

//
}