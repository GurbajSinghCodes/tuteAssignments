// Variables declared to store Amount, Principle, Rate of Interest, Number of times interest is compounded and time period
let A, P, r, n, t;
P = Number(prompt("Enter principle"))
r = Number(prompt("Enter rate of interest"))
n = Number(prompt("Number of times interest compounded per year"))
t = Number(prompt("Time period (in years)"))

A = P * (1 + (r / n)) ** (n * t) // Formula for compound interest

alert(`Final amount ${A}`)
console.log(`Final amount ${A}`)