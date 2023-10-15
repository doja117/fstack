function PrimeCheck(n){
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

module.exports=PrimeCheck;