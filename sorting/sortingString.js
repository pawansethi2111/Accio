let arr =["grapes","apples","oranges"]


arr.sort(custom) 

function custom(a,b)
{
    return b.localeCompare(a)
    // if(a<b)
    // {
    //     return 1;
    // }
    // else{
    //     return -1;
    // }
}

console.log(arr); //["oranges","grapes","apples"]


// let s1  = "ramhesh"
// let s2 = "zpankaj"
// console.log(s1.localeCompare(s2)) //-1

//left string > right string => 1
//left string < right string =>-1
// left string == right string =>0