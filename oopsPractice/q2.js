// create a Bank account class, with banker name,account number ,balance, and methods
// to deposit , withdraw and check balance.
// Make sure balance is private and can only be accessed through the deposit, withdraw
// , and check balance methods not publicly.

class BankAccount{

    #balance
    constructor(name,accountnumber,balance){
        this.name = name;
        this.accountnumber = accountnumber;
        this.#balance = balance;
    }
    deposit(amt){
        this.#balance +=amt;        
    }

    withdraw(amt){  
        if(amt>this.#balance)
        {
            console.log("Insifficient Balance")
            return;
        }
        this.#balance-=amt;
    }

    checkbalance()
    {
        console.log(this.#balance);
    }
}

let person1 = new BankAccount("John", 123456,1000);

person1.deposit(5000);
person1.withdraw(500);
person1.checkbalance();

console.log("Name",person1.name);
console.log("Account Number",person1.accountnumber);
console.log("Balance",person1.balance);
