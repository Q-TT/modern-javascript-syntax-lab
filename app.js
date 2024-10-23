// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];


// 1. Create a new array where each value is multiplied by 2 and log the new array.
const nums2 = nums.map((currentNum) => {
    return currentNum*2
})

console.log(nums2)


// 2. Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstPizzaTopping, secondPizzaTopping] = pizzaToppings

console.log(firstPizzaTopping)
console.log(secondPizzaTopping)


// 3. Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
const car = {
    make: 'Audi',
    model: 'q5',
  };
  
const {make, model} = car
console.log(make)
console.log(model)


// 4. Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings)


// 5. Duplicate the following object and spread its values into a new variable `myCar`.
// Change the `model` property of `myCar` to 'q7'. Log both objects.
const myCar = {...car}
myCar.model = "q7"
console.log("car:", car)
console.log("my car:", myCar)


// 6. Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const propertyName = "username"
const userProfile ={
    [propertyName]: "Astrid",
}
console.log(userProfile)


// 8. Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// 1. `cat`
// 2. `white`
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
function writeSentence (noun, adjective) {
    console.log(`The ${noun} is ${adjective}.`)
}
writeSentence("cat", "white")


// 9. Convert the following `if...else` statement in to a ternary:
let pizza = 'tasty';
if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

pizza==="tasty" ? console.log("yum") : console.log("yuck") 

// 10.
// 1. SET LANGUAGE
// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 
// "LANG is equal to localLangConfig or the default value of English."
const localLangConfig = "fr"; 
let LANG = localLangConfig || "en"

console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME
const userSavedTheme = null; 
const USER_THEME = userSavedTheme || "light"

console.log('User theme setting:', USER_THEME);


// 11. Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age
  
  console.log(cat);
  