let A, P, r, n, t;
P = prompt("Enter principle")
r = prompt("Enter rate of interest")
n = prompt("Number of times interest compounded per year")
t = prompt("Time period (in years)")
A = P * (1 + (r / n)) ^ (n * t)

alert("Final amount=" + A)
console.log("Final amount " + A)