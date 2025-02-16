

function hello()
{
    let count=0
    return ()=>{
        count++
        console.log(count)
    }
}


let x1 = hello()

x1() //1
x1() //2
x1() //3

console.log('--------------')

let y1 = hello()
y1() //1
y1() //2


// closures meaning: inner function will remember the instance of the outer variable

// let count=0 //1

// function hello(){
//     count++
//     console.log(count)
// }

// hello()
// hello()