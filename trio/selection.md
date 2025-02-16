how to find?
the table with id ="age-table"

all label elements inside that table
(there should be 3 of them)

The first td in that table (with the word "Age")

The form with name= "search"

The first input in that form

the last input in that form


let labels = document.querySelectorAll("label")
let labels = document.querySelector("#age-table label")

let first = document.querySelector("form[name='search']")

let first = document.querySelectorAll("form input")[0]


let first = document.querySelector("form input")