
const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube', (req, res) => {
  res.send('login here for yt')
})
app.get('/twitter', (req, res) => {
  res.send("<h2>hello 2git  twitter</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


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

`const users = [`
`{
name : "raghav",
gender: 'male',
age: 18
},
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
]`
