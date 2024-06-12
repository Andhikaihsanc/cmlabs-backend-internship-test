console.log("Welcome to Fizzbuzz");
let angka = 100;

for (let i = 1; i < angka; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        i++;
    } else if (i % 3 === 0) {
        console.log("Fizz");
        i++;
    } else if (i % 5 === 0) {
        console.log("Buzz");
        i++;
    }
    console.log(i);
}