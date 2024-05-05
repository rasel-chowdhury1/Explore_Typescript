{
    // type guard typeof & in

    //typeof --> type guard
    const add = (param1: string | number, param2: string | number) => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString()
        }
    }

    const result1 = add(2,3) // result will be 5
    const result2 = add('2','3') // result will be 23

    //in guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`this user is ${user.name} and role is ${user.role}`)
        }
        else{
            console.log(`This user is ${user.name} normal`)
        }
    }


    const user1: NormalUser= {
        name: 'Mr. Normal'
    }

    getUser(user1)

    const user2: AdminUser = {
        name: 'Mr. Admin',
        role: 'admin'
    }

    getUser(user2)
}