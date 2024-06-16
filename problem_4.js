function myfunc(num){
    let j= num.length-1;
    for (let i=0;i<num.length/2;i++){
        if(num[i]!= num[j]){
            return false;
        }
        j--
    }
    return true;
}
function palindrome(){
    var max=0;
    for(let i=100;i<999;i++){
        for(let j=i;j<999;j++){
            let result=i*j;
            console.log(result);
            let boolval=myfunc(result.toString());
            if (boolval && result > max) {
                max = result;
            }
        }   
    }
    return max;
}   
console.log(palindrome());