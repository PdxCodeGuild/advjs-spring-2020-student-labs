var arguments = process.argv
var result = 0
for (let i = 2; i < arguments.length; i++) {
  result += Number(arguments[i])
  console.log('arguments[i]', arguments[i])
}
console.log(result)
