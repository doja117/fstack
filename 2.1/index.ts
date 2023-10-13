import ReturnSum from './returnSum';
import express , {Request,Response} from "express";

const app=express();
const port=3000;


function handleRequest(req:Request,resp:Response):Response{
    resp.send("Hello World")
}

function handleSums(req:Request,resp:Response):Response{
    var ans:number=ReturnSum(100);
    resp.send(`Sum for numbers till 100 is ${ans}`);
}

app.get("/helloWorld",handleRequest);
app.get("/maths",handleSums);
app.get("/",(req:Request,resp:Response)=>{
    resp.send("Welcome to 3000")
})


app.listen(port,()=>{
    console.log('Responding from Port :',port)
})