class Hello {
    
    // let name = "Abhi"
    greet1(name){
        this.x = "Abhishek" //instance level variable
        let y = name
        console.log("Good morning",this.x);
    }
    greet2(){
        this.x = "Anand"
        console.log("Good afternoon",this.x);
    }

    greet3(){
        console.log("Good Night",this.x);
        this.x = "Raj"
        console.log("Good evening",this.x);
    }

    greet4(){
        console.log("Hii",this.x);
    }
}

let obj = new Hello();

console.log(obj)
obj.greet1("Abhi");
obj.greet2();
obj.greet3();

//this.x = "Raj"

// obj2.greet4();


let obj2 = new Hello()

obj2.greet4();


let set1 = new Set();
let set2 = new Set();

set1.add(10)
set1.add(20)
set1.add(30)

// let map = new Map();

// map.has()
// map.delete()

