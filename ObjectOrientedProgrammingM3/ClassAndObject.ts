{
  // OOP -> Class and Object

  class Animal {
    //one way
    //(name,species,sound)-> it is called property
    // name: string;
    // species: string;
    // sound: string;

    // constructor(name: string, species: string, sound: string){
    //     this.name = name,
    //     this.species = species,
    //     this.sound = sound
    // }

    //2nd way -> above code shortcut declear and always set access modifier otherwise show error...below code some extra working in compiler of typescript
    constructor(public name: string, public species: string, public sound: string){}
    
    //make sound called method
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }

    showName(){
      console.log(`name is ${this.name}`)
    }
  }

  const dog = new Animal('Germa Sheprad', 'dog', 'ghew ghew');
  const cat = new Animal('Pershian', 'cat', 'Meo Meo');

  console.log(dog.name)
  dog.showName()
  cat.makeSound()
  



}