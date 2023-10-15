function Add2n(n){
    if (n<0){
        return -1*(n*(n+1)/2);
    }
    return (n*(n+1)/2);
}

function MultiplyTillN(n){
    if (n<0){
        return -1*MultiplyTillN(-1*n);
    }
    let ans=1;
    for(let i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
    
}

module.exports={MultiplyTillN,Add2n};   