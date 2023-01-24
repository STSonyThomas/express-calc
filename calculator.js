const express = require("express");
const app = express();
const bodyParser =require("body-parser");

/**urlencoded is used whenever we take data from a html form
 * in addtion to that
 * extended=true for posting 
 */
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})
app.post("/",function(req,res){
    console.log(req.body);
    let num1 =Number(req.body.num1);
    let num2 =Number(req.body.num2);
    let result = Math.round(num1+num2);
    res.send("The result of the calculation is "+result);   
})

app.post("/bmiCalculator",function(req,res){
    let weight =req.body.weight;
    let height =req.body.height;
    let result =Math.round(weight/(Math.pow(height,2)));
    res.send("You BMI is "+result);
})

app.listen(3000,function(){
    console.log("server is running!");
});