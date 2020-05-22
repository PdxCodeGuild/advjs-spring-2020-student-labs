loop = process.argv
let total = 0

for(let i = 2; i < loop.length; i++){
    total = total + +loop[i]
}
console.log(total)