//create a person class with properties name and age. Then,create an Employee class that
//inherits from Person and has an additional jobTitle
class Person{
    constructor(name,age)
    {        
        this.name = name;
        this.age = age;
    }    
}

class Employee extends Person
{
    constructor(name,age,jobtitle)
    {
        super(name,age);
        this.jobtitle = jobtitle;
    }
}


// class Employee extends Person
// {
//     constructor(jobtitle)
//     {
//         super("Ramesh",25);
//         console.log(this.name,this.age)
//         this.jobtitle = jobtitle;
//     }
// }
// const emp = new Employee("Software Developer");

// class Employee extends Person{
//     constructor(name,age,jobtitle){
//         super(name,age)
//         this.jobTitle = jobtitle;
//     }
// }

// const emp = new Employee("John",30,"Software Developer");