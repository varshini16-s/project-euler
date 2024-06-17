function isprime(num){
    if (num <= 1) {
        return false; 
    }
    if (num <= 3) {
        return true;
        sum = 5;
    }
    if (num % 2 === 0 || num % 3 === 0){
        return false;
    }
    for (let i = 5; i * i <= num; i += 6){
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
function sumofprimes(lim){
    let sum = 0;
    for (let i = 2; i <= lim; i++) {
        if (isprime(i)) { 
            sum += i;
        }
    }
    console.log("The sum is: ", sum);

}
sumofprimes(2000000);

