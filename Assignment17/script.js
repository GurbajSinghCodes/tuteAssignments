function divide() {
    let divident = Number(prompt("Enter first number (Divident) "))
    let divisor = Number(prompt("Enter second number (Divisor) "))

    let value = new Promise((resolve, reject) => {
        if (divisor == 0) {
            return reject("Can't divide by 0")
        }
        let result = divident / divisor
        resolve(`Result after dividing is ${result} `)
    })
    value.then(result => {
        console.log("Divided", result);

    }).catch(result => {
        console.log(result);

    })
}
divide()    