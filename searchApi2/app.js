const app= 

app.get("/filter",getFilterCountries);


function getFilterCountries(req,res){
    let sub = req.body.sub;
    let ans = countries.filter(country=>country.toLowerCase().includes(sub.toLowerCase()));
    
    res.json({countries:ans});
}

app.listen(port,()=>{
    console.log(`Server`)
})