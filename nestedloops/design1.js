// *
// *
// *
// *
// *

// for(let i=0;i<=5;i++){
//     console.log("*")
// }


//*****

// let str = ""
// for(let i = 1;i<=5;i++){
//     str = str+"*"
// }
// console.log(str)
// i=1 =>*
// i=2 =>**
// i=3 =>***
// i=4 =>****
// i=5 =>*****


// let str = ""
// for(let i=1;i<=5;i++){
//     str = str+i+" "
// }
// console.log(str)

//*****
//*****
//*****

// for(let line=1;line<=3;line++)
// {
//     let str = ""
//     for(let i = 1;i<=5;i++){
//         str = str+"*"
//     }
//     console.log(str)    
// }

//*****
//*****
//*****

// for(let line = 1;line<=3;line++){

//     let str = ""
//     for(let col = 1;col<=5;col++){
//         str = str+"* "
//     }   
//     console.log(str)
// }

//* =>1
//** =>2
//*** =>3
//**** =>4
// for(let line = 1;line<=4;line++)
// {
//     let str = ""
//     for(let col = 1;col<=line;col++)
//     {
//         str = str+"* "
//     }
//     console.log(str)
// }


// * =>1
// *** =>3
// ***** =>5
// ******* =>7
// ********* =>9

// for(let line = 1;line<=5;line++)
//     {
//         let str = ""
//         for(let col = 1;col<=2*line-1;col++)
//         {
//             str = str+"*"
//         }
//         console.log(str)        
//     }

let x = 1   
for(let line = 1;line<=5;line++){
    let str = ""
    for(let col = 1;col<=x;col++){
        str = str+"*"
    }
    console.log(str)
    x = x+2
}




// Q-1
// for(let line = 1;line<=4;line++){
//     let str = ""
//     for(let col = 1;col<=5;col++){
//       str = str+"*"
//     }
//     console.log(str)
//   }

//Q-2
// for(let line = 1;line<=5;line++)
//     {
//       let str   = ""
//       for(let col = 1;col<=line;col++){
//         str = str+"*"
//       }
//       console.log(str)
//     }


// Q-3
// for(let line = 1;line<=5;line++)
//     {
//       let str = ""
//       for(let col = 1;col<=line;col++)
//       {
//         str = str+col
//       }
//       console.log(str)
//     }


//Q-4
// for(let line=  1;line<=5;line++){
//     let str= ""
//     for(let col = 1;col<=line;col++){
//       str = str+line
//     }
//     console.log(str)
//   }

// Q-5
// let count = 1
// for(let line = 1;line<=5;line++){
//   let str = ""
//   for(let col = 1;col<=line;col++){
//     str = str+count+" "
//     count++
//   }
//   console.log(str)
// }

// Q-6
// let bool = 1
// for(let line = 1;line<=6;line++){
//   let str = ""
//   for(let col = 1;col<=line;col++)
//   {
//     str  = str+bool;
//     if(bool ==1){
//       bool = 0
//     }
//     else{
//       bool=1
//     }
//   }
//   console.log(str)
// }


// Q-7
// let tri = 1
// for(let line = 1;line<=5;line++)
// {
//   let str = ""
//   for(let col = 1;col<=line;col++)
//   {
//     str = str+tri
//     if(tri==3){
//       tri = 1
//     }
//     else{
//       tri++
//     }
//   }
//   console.log(str)
// }


// Q-8
// for(let line=5;line>=1;line--){
//     let str = ""
//     for(let col =5;col>=line;col--)
//     {
//       str = str+col
//     }
//     console.log(str)
//   }

// Q-9
// for(let i = 5;i>=1;i--){
//     let str = ""
//     for(let j = i;j<=5;j++){
//     str = str+j
//     }
//     console.log(str)
//   }



//q-10
// for(let i = 4;i>=0;i--){
//     let str = ""
//     for(let j = i;j>0;j--){
//       str = str+" "
//     }
//     for(let k=1;k<=5-i;k++){
//       str = str+k
//     }
//     console.log(str)
//   }

// Q-11
// for(let line = 4;line>=0;line--){
//     let str = ""
//     for(let col =1;col<=line;col++){
//       str = str+ " "
//     }
//     //console.log(str)
    
//     for(let k = 1;k<=2*(5-line)-1;k++){
//       str = str+"*"
//     }
//     console.log(str)
//   }

// Q-12
// for(let line=4;line>=0; line--){
//     let str = ""
//     for(let col = 0;col<line;col++){
//       str = str+" "
//     }
//   //  console.log(str)
    
//     for(let k = 1;k<=5-line;k++){
//       str = str+ (k*2)
//     }
//     console.log(str)
//   }

// Q-13
// for(let line =1;line<=4;line++)
//     {
//       let str = ""
//       for(let col = 1;col<=4;col++){
//         if((line>1 &&line<4)&&(col>1 &&col<4)){
//         str = str+"  "
//         }
//         else
//         str  = str+"* "
//       }
//       console.log(str)
//     }


// Q-14
// for(let line = 4;line>=0;line--){
//     let str = ""
//     for(let col =1;col<=line;col++){
//       str = str+ " "
//     }
//     //console.log(str)
    
//     for(let k = 1;k<=2*(5-line)-1;k++){
//       str = str+"*"
//     }
//     console.log(str)
//   }
//   for(let line = 0;line<=4;line++){
//     let str = ""
//     for(let col =1;col<=line;col++){
//       str = str+ " "
//     }
//     //console.log(str)
    
//     for(let k = 1;k<=2*(5-line)-1;k++){
//       str = str+"*"
//     }
//     console.log(str)
//   }