//count all possible 3 letter substring in a  given string
// str="abhishek"
//q2: Print all the palindromic substrings in a given String
//q3: Take a string and print only those characters which are vowels


// Q-1
// let str = "abhishek"
// let count = 0
// for(let i = 0;i<=str.length-3;i++){
//     console.log(str.slice(i,i+3))
//     count++
// }
// console.log(count)


// Q-2
let str  = "bamamab"
//b,ba,bam,bama,bamamab
//a,am,ama,amam,amama,amamab
//m,ma,mam,mama,mamab
//a,am,ama,amab
//m,ma,mab
//a,ab
//b


let count = 0
for(let i=0;i<=str.length-1;i++)
{
    for(let j=i+1;j<=str.length;j++)
    {
        // console.log(str.slice(i,j))
        //0-1 =>b
        //0-2 =>ba
        //0-3 =>bam
        //0-4 =>bama
        let originalStr = str.slice(i,j) //"mama" 
        let revStr = ""       
        for(let k = originalStr.length-1;k>=0;k--)
        {
            revStr = revStr + originalStr[k]
        }
        // console.log(originalStr,revStr)
        if(originalStr == revStr){
            console.log(originalStr)
            count++
        }        
    }
}

// Q-3
// let newstr = ""
// for(let i = 0;i<str.length;i++)
// {
//     if(str[i]=='a'||str[i]=='A'||str[i]=='e'||str[i]=='E'||str[i]=='i'||str[i]=='I'|| str[i]=='o'||str[i]=='O'
//         || str[i]=='u'||str[i]=='U'
//     )
//     newstr = newstr+str[i];
// }

// console.log(newstr)