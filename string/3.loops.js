let str = "abhishek"

for(let i  = 0;i<=str.length-1;i++){
    console.log(i,"=>",str[i])
}



//for of loops
for(let t of str){
    console.log(t);
}
//for in loop don't use in string
for(let x in str){ //in loop index by index //string ka sath bhot slow he
    console.log(x)
}



