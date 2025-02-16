import React from "react";
//properties => props


const BtnComponent = ({title,price,arr}) =>{
    // console.log(props)
    // props.title = "Guava"
    //props is read-only

    // props= {title:"Guava", price:10, arr:[10,20,30]}

    // let {title,price,arr} = props;

    return <div>
    <button>{title}</button>
    <p>{price}</p>
    <p>{arr.join(",")}</p>
    </div>
}
export default BtnComponent;