function hello(){

    let count =0

    return ()=>{
        count++
        console.log(count)
    }
}

let x= hello()

x = () =>{count++

    console.log(count)
}

x()

let y = hello()