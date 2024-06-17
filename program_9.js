function pytriplet(num) {
    for (let a = 1; a < num / 2; a++){
        for (let b = a + 1; b < num / 2; b++){
            let c = num - a - b;
            if (a * a + b * b === c * c){
                return [a, b, c];
            }
        }
    }
}

const triplet = pytriplet (1000);
if (triplet) {
    const [a, b, c] = triplet;
    const product = a * b * c;
    console.log(a, b, c);
    console.log(product);
} else {
    console.log("NONE")
}