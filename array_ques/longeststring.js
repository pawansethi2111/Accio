let arr = [10,11,1,2,8,4,12,-7,-6]

//array negative,positive,zero
//biggest number
// let big= arr[0]
let big = -Infinity
for(let i=0;i<arr.length;i++){
    big = Math.max(big,arr[i])
}
console.log(big)

//2nd biggest number


function secondBiggest(){
    let sbig = -Infinity
    let max= -Infinity
    for(let t of arr){
        if(t>max){
            sbig = max //1 //2
            max = t //2 //3
        }
        else if(t>sbig && t!=max){
            sbig = t
        }
    }
    if(big==sbig){
        console.log()
    }
    console.log(sbig)
}

//exception secondbiggest[5,5,5,5,5,5,5]
// secondbiggest [1,2,100,96,11,12]


//simple strings

function findString(A,B,C){
let removedCharacter  = A[0]
A = A.slice(1)
while(true){
    console.log(A,B,C)
if(removedCharacter=="a"){
removedCharacter=A[0]
A = A.slice(1)  //"a"
if(A.length==0){
    return "A"
}
}
else if(removedCharacter=="b"){
removedCharacter = B[0]
B = B.slice(1)
if(B.length==0){
    return "B"
}
}
else if(removedCharacter=="c"){
C = C.slice(1) //a
if(C.length==0){
    return "C"
}
}
}
}
console.log(findString("aca","accc","ca"))


function longestString(arr){
    let big= 0
    for(let t of arr){
        let l= t.length
        if(l>big){
            big = l
        }
    }
}

longestString(["ant","mant","santa","rent"])