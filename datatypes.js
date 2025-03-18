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