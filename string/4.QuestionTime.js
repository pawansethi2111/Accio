//q1

//Take a string and print its last four characters

//q2
//take a string and print only those characters which are consonents

//q3 take a string and reverse it
//Ram =>maR

let str = "abcdefghijkl"

for(let i=str.length-4;i<str.length;i++){
console.log(str[i])
}

for(let i = 0;i<str.length;i++){
    if(str[i]!='a'&& str[i]!='e'&& str[i]!='i' && str[i]!='o' && str[i]!='u'){
        console.log(str[i]);
    }
}

for(let t of str){
    if(t=="a" || t=="A" || 
       t=="e" || t=="E" || 
       t=="i" || t=="I" ||
       t=="o" || t=="O" || 
       t=="u" || t=="U")
    {
        console.log(t)
    }
}

//reverse a string

// for(let i = 0;i<str.length/2;i++){    //javascript string is immutable
// let character = str[i]
// str[i] = str[str.length-i-1]
// str[str.length-i-1] = character
// }
// console.log(str)

// let revword = ""
// for(let i = str.length-1;i>=0;i--)
// {
//     revword = revword+str[i]
// }
// console.log(revword)


// 5+6 = 6+5
// "a"+"b" ="ab"
// "b"+"a" = "ba"




let reverseWord = ""
for(let i = 0;i<=str.length-1;i++)
{
    console.log(i,"=>",str[i])
    reverseWord = str[i]+reverseWord
}

console.log(reverseWord)
