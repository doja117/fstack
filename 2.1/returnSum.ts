function ReturnSum(n:number):number{
    if (n<0){
        return -1* (n * (n-1))/2;    
    }
    return (n * (n-1))/2;
}


module.exports=ReturnSum;