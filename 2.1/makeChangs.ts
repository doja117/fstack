function AddtoArr(str:string[],name:string):string[]{
    str.push(name);
    return str;
}

function RemoveFromArr(str:string[],name:string):string[] {
    if (str.length===0){
        return str;
    } 
    let idx=-1;
    for (let i=0;i<str.length;i++){
        if (str[i]===name){
            idx=i;
            break;
        }
    }
    if (idx!=-1){
    str=str.slice(idx,1);
}
    return str;

}

module.exports={AddtoArr,RemoveFromArr};