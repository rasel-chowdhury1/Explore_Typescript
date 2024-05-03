{

  // Generices Constraints keyof operator -> Union

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }

   //manually
  type Owner = 'bike' | 'car' | 'ship'
  //dynamicly using keyof 
  type Owner2 = keyof Vehicle;


  const getProperty = <X,Y extends keyof X>(obj:X, pro: Y) => {
    return obj[pro]
  }

  const user = {
    name: 'rasel',
    age: 26,
    address: 'ctg'
  }

  const car = {
    model: 'Toyta',
    price: 200000
  }

  const result1 = getProperty(user, "age");
  const result2 = getProperty(car, 'model')


}