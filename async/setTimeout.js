console.log("A")

setTimeout(()=>{console.log("B")}, 3000)
console.log("C")

for(let i=0;i<10000000000;i++){

}

setTimeout(() => {
    console.log("D")
}, 1000);
//still acb
//first sync and then async


let c=0
setTimeout(()=>{
    c = 100
    console.log("inside",c)
},1000)
console.log(c)