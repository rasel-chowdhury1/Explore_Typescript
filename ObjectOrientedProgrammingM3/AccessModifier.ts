{
    //Access Modifiers
    class BankAccount{
        //by default all property public access modifier
        // private property -> we can access and modify in parent class but can not child class and instance
        // Protect property -> We can access and modigy in parent and child class but can not instance. 
        readonly id: number;
        readonly name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name:string, balance: number = 0){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            if(amount < 0){
                console.log(`You can not negative amount ${amount}/-  deposit`)
            }
            else{
                this._balance += amount;
                console.log(`Your deposit balance is ${amount}/- and current balance -> ${this._balance}/-`)
            }
        }

        withdrawBalance(amount: number){
            if(amount <= 0){
                console.log(`You can not ${amount} withdraw balance`)
            }
            else if(amount > this._balance){
                console.log(`this amount ${amount} not available in your account balance ${this._balance}`)
            }
            else{
               this._balance -= amount;
               console.log(`Successfully amount ${amount} withdraw balance in your account balance ${this._balance}`)
            }
        }
        
        showBalance(){
            return this._balance;
        }

    }

    class StudentAcount extends BankAccount{
        test(){
            //if _base class private access modifier we can not access child class but if property be Protected then access and modify in child class
            console.log(this._balance)  
        }
        
    } 


    const rahim = new BankAccount(101, 'rahim');

    console.log(`id is -> ${rahim.id} name -> ${rahim.name}`)
    rahim.addDeposit(10);

     const balance = rahim.showBalance();
     console.log(`Balance -> ${balance}`)

     rahim.withdrawBalance(300)
    

}