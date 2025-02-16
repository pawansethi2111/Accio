//Lets create a class for Registration of users. Each users will have name,email,password
//Find the total number of users registered


//not related to ques
// Destructuring
// let obj = {a:10,b:20,c:30}

// let {a,b,c} = obj
// console.log(a,b,c)

class Registration{
    static count=0;
    constructor(name,email,password)
    {
        this.name= name;
        this.email = email;
        this.password = password;
        Registration.count++;
    }

    static display()
    {
        console.log(Registration.count)
    }
}

let p1 = new Registration("Pawan","p@gmail.com","123456");
// p1.display();
let p2 = new Registration("Pawan2","q@gmail.com","123456");
// p2.display();
let p3 = new Registration("Pawan3","r@gmail.com","123456");
// p3.display();
let p4 = new Registration("Pawan4","s@gmail.com","123456");
// p4.display();

Registration.display()