{
    // basic promise

    type ToDo = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    const getTodo = async(): Promise<ToDo>  => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data: ToDo = await response.json()
        console.log(data);
        return data;
    }

    getTodo()

    type UserData = {
        id: number,
       name: string,
       email: string,
       gender: string
    }
    const createPromise = (): Promise<UserData> => {
        return new Promise<UserData>((resolve, reject) => {
            const data: UserData = {id:103,name: 'piklu',email:'piklu@gmail.com',gender: "Male"};

            if(data){
                resolve(data)
            }
            else{
                reject('data not exists')
            }
        })
    }


    //calling create promise function
    const showdata = async() => {
        try {
            const loaddata = await  createPromise()
            console.log('loadData -> ', loaddata)
            return loaddata
            // 
        } catch (error) {
            console.log(error)
        }
    }

    const result = async() => { 
        const value = await showdata()
        console.log('result is -> ',value)
        return value;
    }
    
}