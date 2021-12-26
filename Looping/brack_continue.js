
// Break & Continue


let num = [1, 2, 3, 4, 5, 6, 7 ]

for (i in num) {
    if (i == 5) {
        break
    }
}

console.log(`${i} = ${num[i]}`)
    
console.log(" ")

for (x in num) {
    if (x == 4) {
        continue
    }
}

console.log(`${x} = ${num[x]}`)

