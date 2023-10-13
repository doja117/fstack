import ReturnSum from './returnSum';
import SendTime from './sendTime';
import express , {Request,Response} from "express";

const app=express();
const port=3000;


function handleRequest(req:Request,resp:Response):Response{
    resp.send("Hello World")
}

function whenToStart(req:Request,resp:Response){
    resp.send("week2:1,1:32:32")
}
function handleTime(req:Request,resp:Response){
    var s:string=SendTime();
    resp.send(`${s}`);
    (()=>{       
        setTimeout(handleTime,1000)
    })()
    
}

function handleMathSums(req:Request,reps:Response){
    console.log(parseInt(req.query.counter))
    if (!isNaN(parseInt(req.query.counter))){
    reps.send(`Sum for numbers till ${req.query.counter} is ${ReturnSum(parseInt(req.query.counter))}`)
    } else{
    reps.send("Enter Proper Number");
    }
}
function handleSums(req:Request,resp:Response):Response{
    var ans:number=ReturnSum(100);
    resp.send(`Sum for numbers till 100 is ${ans}`);
}
app.get("/whentostart",whenToStart);
app.get("/helloWorld",handleRequest);
app.get("/maths",handleMathSums);
app.get("/time",handleTime);
app.get("/",(req:Request,resp:Response)=>{
    resp.send("Welcome to 3000")
})



app.listen(port,()=>{
    console.log('Responding from Port :',port)
})