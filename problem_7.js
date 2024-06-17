function isprime(num){
    if (num <= 1) {
        return false; 
    }
    if (num <= 3) {
        return true;
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

function findtheprimenumber(n){
    let count = 0;
    let num = 1;
    while (count < n){
        num++;
        if (isprime(num)) {
            count++;
        }
    }
    return num;
}
const nthprime = findtheprimenumber(10001);
console.log("The 10001th prime number is : ", nthprime);