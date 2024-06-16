function gcd(a,b){
    while (b!==0){
        [a,b]=[b,a%b];
    }
    return a;
}
function lcm(a,b){
    return ((a*b)/gcd(a,b));
}

let result=1;
for(let i=2;i<=20;i++){
    result=lcm(result,i);
}

console.log(result);