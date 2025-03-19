// Data types

`let name = "name"
let age = 12
let gender = "male"
let state = "delhi"`

//Objects

`const user = {
name : "raghav",
gender: 'male',
age: 18
}`

//Array of objects

const users = [
{
name : "raghav",
gender: 'male',
age: 18
}
{
name : "abhishek",
gender: 'male',
age: 18
},
{
name : "user3",
gender: 'female',
age: 18
},
]

function checkVotingEligibility() {
  let users = [
    {
      name: "raghav",
      gender: "male",
      age: 18,
    },
    {
      name: "abhishek",
      gender: "male",
      age: 16,
    },
    {
      name: "user3",
      gender: "female",
      age: 18,
    },
  ]
  users.forEach((users) => {
    console.log(`Hello, ${users.name}!`)

    if (users.age >= 18) {
      console.log("You are eligible to vote.")
    } else {
      console.log(
        `You are not eligible to vote. You are only ${users.age} years old.`,
      )
 }
  })
}
checkVotingEligibility()

//Implement a function calculateTotalSpentByCategory which takes a list of transactions as parameter
and return a list of objects where each object is unique category-wise and has total price spent as its value.
transactions is an array where each
function checktotalprice() {
  let items = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: "Food",
      itemName: "Pizza",
    },
    {
      id: 2,
      timestamp: 1656076810000,
      price: 20,
      category: "Food",
      itemName: "Pasta",
    },
    {
      id: 3,
      timestamp: 1656076800000,
      price: 5,
      category: "Grocery",
      itemName: "Biscuit",
    },
  ]

  const result = []
  const finalCategory = {}

  items.forEach(({ category, price }) => {
    if (!finalCategory[category]) {
      finalCategory[category] = 0
    }
    finalCategory[category] += price
  })
let allentries = Object.entries(finalCategory);
const finalOutput = []
console.log(allentries)
for(let i = 0; i < allentries.length; i++){
	let item = allentries[i]
  const newObj = {
  	category: item[0],
    totalSpent: item[1]
  }
  finalOutput.push(newObj)
}
console.log(finalOutput)

 allentries.forEach(item => {
   const newObj = {
    category: item[0],
    totalSpent: item[1]
  }
  finalOutput.push(newObj)
})
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