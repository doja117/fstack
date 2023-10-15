import ReturnSum from './returnSum';
import SendTime from './sendTime';
import express , {Request,Response} from "express";
import {AddtoArr,RemoveFromArr} from './makeChangs';
const app=express();
const port=3000;

var names:string[]=[];
function handleRequest(req:Request,resp:Response):Response{
    resp.send("Hello World")
}

function whenToStart(req:Request,resp:Response):Response{
    resp.send("week2:2,0:13:54")
}
function handleTime(req:Request,resp:Response):Response{
    var s:string=SendTime();
    resp.send(`${s}`);
    (()=>{       
        setTimeout(handleTime,1000)
    })()
    
}

function handleMathSums(req:Request,reps:Response):Response{
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

function postMaths(req:Request,reps:Response):Response{
    var ans=req.headers.counter;
    if (!isNaN(parseInt(ans))){
        reps.send(`Sum for numbers till ${ans} is ${ReturnSum(parseInt(ans))}`)
        } else{
        reps.send("Enter Proper Number");
        }
    //resp.send(`Sum for numbers till ${req.query.counter} is ${ReturnSum(parseInt(req.query.counter))}`)
}
app.post("/postmaths",postMaths);
app.get("/whentostart",whenToStart);
app.get("/helloWorld",handleRequest);
app.get("/maths",handleMathSums);
app.get("/time",handleTime);
app.get("/",(req:Request,resp:Response)=>{
    resp.send("Welcome to 3000")
})

app.post('/changeArr',(req:Request,resp:Response)=>{
    if (req.query.method==="add"){
        AddtoArr(names,req.query.name);
        resp.send(names);
    } else if (req.query.method==="del"){
        RemoveFromArr(names,req.query.name)
        resp.send(names);
    } else{
        resp.send("No applicable method");
    }
    console.log(names);
})

app.listen(port,()=>{
    console.log('Responding from Port :',port)
})