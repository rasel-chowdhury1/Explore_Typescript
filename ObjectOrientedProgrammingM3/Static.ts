{
    //static
    class Counter{

        //when use static property and method.they can not known what is this (this.count).then known Class name So (Counter.count)
        static count: number = 0;

        increment(){
            return Counter.count += 1;
        }
         
        decrement(){
            return Counter.count -= 1;
        }

    }

    //count property allowcate different memory location in each instance
    // but when static use in count property then not allowcate different memory location
    
    // when not use static then each instance count value difference memory location
    // const instance1 = new Counter()
    // console.log(instance1.increment()) // 1
    // const instance2 = new Counter();
    // console.log(instance2.increment()) // 1

    //when use static
    const instance1 = new Counter()
    console.log(instance1.increment()) // 1
    const instance2 = new Counter();
    console.log(instance2.increment()) // 2
}