
let a = [11, 12, 4, 3, 1223]

function maxNum(array) {
    let max = 0;
    for (let i of array) {
        if (i > max) max = i
    }
    console.log(`Maximum number in the array is ${max}`);

}
function arraySum(array) {
    let sum = 0;
    for (let i of array) {
        sum += i
    }
    console.log(`Sum of all elements of array is ${sum}`)
}

function oddCount(array) {
    let odds = 0;
    for (let i of array) {
        if (i % 2 !== 0) odds += 1
    }
    console.log(`There are ${odds} odd numbers in the array`)
}

maxNum(a)
arraySum(a)
oddCount(a)