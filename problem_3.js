function lpm(num){
    var primefactor=1
    while(num%2===0){
        primefactor=2;
        num /= 2;
    }
    let factor=3;
    while(factor*factor<=num){
        while(num%factor === 0){
            primefactor=factor;
            num/= factor;
        }
        factor+=2;
    }
    if(num>2){
        primefactor=num;
    }
    return primefactor;
}
var num=600851475143;
console.log(lpm(num))