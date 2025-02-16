for(let i=1;i<=5;i++){
    if(i==4){
        break
    }
    console.log(i)
}

for(let i=1;i<=5;i++){
    if(i==4)
{
        continue
}
    console.log(i) //1,2,3
}
for(let i=1;i<=3;i++){
    console.log(i)
    continue
}

//break// breaks the code
//continue // sends to the top of the code


for(let i=1;i<=3;i++){
    console.log(i)
    continue
    console.log("Hello")
}

//dear ai, please write a code that will print 1 to 5

// let i=1
// while(i<=5){
//     if(i==4){
//         continue//break
//         //creates infinite loop
//     }
//     console.log(i)
//     i++
// }

let i=1
while(i<=5){
    console.log(i)
    i++
    if(i==4){
        continue
    }
    console.log("Hello")
}