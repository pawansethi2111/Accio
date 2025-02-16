let seconds = 1000000
//find time in hours
hours = 1000000/3600
let numberOfDays  = 10000000
months = 10000000/30
//how many full months are possible
// all months are of 30 days
console.log(hours.toFixed(2))
console.log(parseInt(months))

//Enter a number and print "Hello" if divisible by 3 . Print "World" if divisble by 5 . And print "Hello World"
// if divisible by 3 and 5.

//q7:
//Enter number of electricity units consumed and calculate amount of pay, based on rules below
//For first 50 units,  Rs 1/units
//For next 100 units,  Rs 2/units
//For next 100 units,  Rs 3/units
//For units above 250, Rs 4/units
//For all bills above 150 rupees additional surcharge of 20% of total bill amount is
//added
//40 units => 40 rupees
//90 units => 50*1 + 40*2 = 130
//200 units=> 50*1 + `00*2+ 50*3 = 50+200+150

let number  = 15
if(number%3==0 && number%5!=0)
{
    console.log("Hello")
}
else if(number%5==0 && number%3!=0)
{
    console.log("World")
}
else if((number%3==0) && (number%5==0))
{
    console.log("Hello World")
}

//Enter number of electricity units consumed and calculate amount of pay, based on rules below
//For first 50 units,  Rs 1/units
//For next 100 units,  Rs 2/units
//For next 100 units,  Rs 3/units
//For units above 250, Rs 4/units
//For all bills above 150 rupees additional surcharge of 20% of total bill amount is
//added
//40 units => 40 rupees
//90 units => 50*1 + 40*2 = 130
//200 units=> 50*1 + `00*2+ 50*3 = 50+200+150
let unit = 100
let pay = 0
if(unit<50){
    console.log("pay is" ,unit*1)
}
else if(unit>=50 && unit <150){
    console.log("pay is",50*1 + (unit-50)*2)    
}
else if(unit>=150 && unit<250){
    console.log("pay is",(50*1) + (100*2)+ (unit-150)*3)
}
else if(unit>=250){
    console.log("pay is ",(50*1) + (100*2)+ (100*3) + (unit-250)*4)
}
if(unit>150)
{
    pay = pay + (pay*0.2)
    console.log("pay is ",pay)
}