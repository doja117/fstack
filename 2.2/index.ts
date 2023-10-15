import express , {Request,Response,NextFunction} from "express";
function PrimeCheck(n:number):string{
    if (n<0){
        return "Enter Proper Number";
    }
    if (n==1 || n==2){
        return `${n} is Prime`;
    }
    for (let i=2;i<=Math.floor(Math.sqrt(n))+1;i++){
        if (n%i==0){
            return `${n} is not Prime`;
        }
    }
    return `${n} is Prime`;
}

const app=express();
const port=3001;
app.get("/",(req:Request,resp:Response):void=>{
    resp.send("Welcome to 3001")
})

function middleWare1(req:Request,res:Response,next:NextFunction):void{
    if (req.headers.counter===undefined){
        res.send("Enter Proper Number");
    } 
    next();
}
app.use(middleWare1);

app.get("/maths",(req:Request,resp:Response)=>{
    resp.send(PrimeCheck(req.headers.counter));
})


app.listen(port,()=>{
            console.log(`Listening on ${port}`)
    
})
console.log("Hello via Bun!");


