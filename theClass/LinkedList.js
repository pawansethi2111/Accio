// let obj3  = {
//     value:30,
//     nextAddress: null
// }

// let obj2 = {
//     value:20,
//     nextAddress: obj3
// }

// let linklistObj = {
//     value:10,
//     nextAddress: obj2
// }    



let linklistObj = {
    value : 10, 
    nextAddress: {
        value: 20,
        nextAddress: {
            value: 30,
            nextAddress: null
        }
    }
}

// console.log(linklistObj);

// let t = linklistObj;
// while(t!==null) {   
// console.log(t.value);
// t = t.nextAddress;
// }
// let lhead = linklistObj
// while(lhead!=null)
// {
//    // console.log(head)
//     console.log(lhead.value)
//     lhead = lhead.nextAddress
// }
// console.log(linklistObj.value)




let head = linklistObj;
function printlinklist(head){ // 10
    if(head==null){
        return;
    }
    console.log(head.value);
    printlinklist(head.nextAddress);
}
printlinklist(linklistObj);