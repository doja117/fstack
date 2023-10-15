const express=require('express');
const {Add2n,MultiplyTillN} =require('./mathsFuncs')
const app=express();
const PrimeCheck=require('./isPrime');
const DisplayBody=require('./bodyFunc');
const bodyParser=require('body-parser');
let numberOfRequest=0;
app.use(bodyParser.urlencoded({extended:false}))
function middleware1(req,resp,next){

    numberOfRequest+=1;
    if (req.body.counter===undefined || isNaN(req.body.counter)){
        resp.send("Enter Proper Number");
    }
    console.log(numberOfRequest);
    next();
}
app.use(bodyParser.json());
//app.use(middleware1);
app.get('/maths',(req,resp)=>{
    if (req.body.counter<100000000000000){
        var ansObj={
            "ans":PrimeCheck(req.body.counter)
        }
        resp.status(200).send(ansObj);
}   else{
    resp.status(401).send("Very Big Number to computer");
}
})
app.get("/",(req,resp)=>{
    resp.send("HelloWorld");
})

app.get("/solve",(req,resp)=>{
    const n1=Add2n(req.body.counter);
    const n2=MultiplyTillN(req.body.counter);
    resp.status(201).send({
        "add":n1,
        "mul":n2
    })
})

app.get("/body",DisplayBody);

app.listen(3002);
