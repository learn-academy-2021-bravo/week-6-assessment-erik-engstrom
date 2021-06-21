// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]

// the function greeting is defined in the describe portion.
describe("greeting", () => {

  // describe in plain words what we want the function to execute.
  test("return a string with a greeting sentence capitalizing the value of the name key", () => {

    //the exact expected outcome is in the .toEqual argument.
    expect(greeting(people)).toEqual("Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee")
    
  })
})

// b) Create the function that makes the test pass.
// create a function that takes an array of objects and capitalizes the value of the name
// map over object people to uppercase the name value 
const greeting = (person) => {
  obj.map(function (item)) {
    // I found the Object.assign method that could be used here.
    let newObj = Object.assign(item, {name: item.name.toUperCase())}
    // string interpolation to get the values passed in
      return `${item} is a ${occupation}`
  }
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// the function remainder is defined in the describe portion 
describe("remainder", () => {

  // describe in plain words what we want the function to execute.
  test("filter only numbers from a mixed data array and return the remainder of that number divided by 3 ", () => {

    //the exact expected outcome is in the .toEqual argument.
    expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])

 })
})


// b) Create the function that makes the test pass.
// Declare a function that looks for a number and returns that number % 3
// map over array to find numbers using the forEach method 
// use .typeof method to identify numbers
// return those numbers mod % 3 to get the remainder 
const remainder = (arr) => {
  let nums = []
  arr.forEach(e => {if (typeof (e) === 'number') {nums.push(e%3)}})
  return nums
} 
console.log(remainder(hodgepodge1))
console.log(remainder(hodgepodge2))









// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// a) Create a test with an expect statement using the variables provided.

// the function remainder is defined in the describe portion 
describe("cubed", () => {

//   // describe in plain words what we want the function to execute.
  test("takes an array of numbers and cubes each element and then sums the elements together", () => {

//     //the exact expected outcome you expect to see in the .toEqual argument.
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)

  })
})

// b) Create the function that makes the test pass.
// iterate over array to cube the element 
// return the sum of the elements cubed

const cubed = (arr) => {
  let sum =0
  for (i=0; i < arr.length; i++) {
     sum += arr[i]*arr[i]*arr[i]
  }
  return sum
}
console.log(cubed(cubeAndSum1));
console.log(cubed(cubeAndSum2));
