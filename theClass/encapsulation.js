class BankAccount{
    #pin
    constructor(accNo,accName,accType,balance){
        this.accNo = accNo;
    }

    setPin(pin1, pin2){
        if(this.#verifyPin(pin1,pin2)){
            this.#pin = pin1;
            console.log("Pin set successfully");
        }else{
            console.log("Pin not matched");
        }
    }

    #verifyPin(pin1, pin2){
        if(pin1 == pin2){
            return true
         }else{
            return false
         }
    }
}

let newAccount = new BankAccount(1234567890);
newAccount.setPin(1234,1234);

console.log(newAccount.pin)