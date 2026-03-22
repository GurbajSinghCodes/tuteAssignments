let i;
function checkProperties(n) {
    console.log(`--------------- Checking properties for ${n} ---------------`);

    //To find sum of first n numbers
    let sum = 0
    for (i = 0; i <= n; i++) {
        sum = sum + i
    }
    console.log(`Sum of first ${n} numbers is ${sum}`)

    //To print table of the given number
    console.log(`Table of ${n}`)
    for (i = 1; i <= 10; i++) {
        console.log(n * i)
    }


    //To check if the number or prime or not
    function isPrime() {
        if (n == 0 || n == 1) {
            return false
        }
        else if (n == 2) return true
        else if (n % 2 == 0) return false
        for (i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) return false
        }
        return true
    }
    if (isPrime(n)) console.log(`${n} is a prime number`);
    else console.log(`${n} is not a prime number`);

    //Printing all factors of n
    console.log(`Factors of ${n} are:`);

    for (i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            console.log(i)
        }

    }
    console.log(n) // As the number is a factor of itself


    // To find sum of all digits of the number
    let digitSum = 0;
    for (let digit of n.toString()) {
        digitSum += Number(digit)
    }
    console.log(`Sum of digits of ${n} is ${digitSum}`);

    //To check if the number is an Armstrong number
    let arm = 0;
    for (let digit of n.toString()) {
        arm += Number(digit) ** n.toString().length
    }
    if (arm == n) console.log(`${n} is an Armstrong number`);
    else console.log(`${n} is not an Armstrong number`);
}
checkProperties(12)
checkProperties(13)
checkProperties(153)
checkProperties(2468)
checkProperties(1)

