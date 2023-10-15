function DisplayBody(req,resp){
    let t=req;
    console.log(t.body);
    resp.send("Testing");
}

module.exports=DisplayBody;