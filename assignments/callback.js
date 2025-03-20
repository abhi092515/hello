function customCalci(a, b, operation) {
  return operation(a, b)
}
const add = (a,b) => a + b
const addition = customCalci(4,5 ,add)
const sub = (a,b) => a- b
const subtraction = customCalci(4,5 ,sub)
const mul = (a, b) => a*b
const multiply= customCalci(4,2 ,mul)
const div= (a,b) => a/ b
const divide= customCalci(14,2 ,div)
console.log(addition)
console.log(subtraction)
console.log(multiply)
console.log(divide)

