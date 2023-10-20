/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const smallPizzaSize = 13;
const largePizzaSize = 17;

const areaSmallPizza = Math.PI * (smallPizzaSize / 2) ** 2;
const areaLargePizza = Math.PI * (largePizzaSize / 2) ** 2;
console.log(areaSmallPizza, areaLargePizza);
// 2. What is the cost per square inch of each pizza?
const smallCostPerIn = 16.99 / areaSmallPizza;
const largeCostPerIn = 19.99 / areaLargePizza;
console.log(smallCostPerIn, largeCostPerIn);
// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const a = Math.floor(Math.random() * 13);
const b = Math.floor(Math.random() * 13);
const c = Math.floor(Math.random() * 13);
console.log(a, b, c);
// 4. Draw 3 cards and use Math to determine the highest
// card
const highestNumber = Math.max(a, b, c);
console.log(highestNumber);
/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = "Matt";
const lastName = "Smith";
const streetAddress = "1234 Flower St.";
const city = "Los Angeles";
const state = "California";
const zipCode = 89119;
const envelope = `${firstName} ${lastName}\n ${streetAddress} \n ${city} , ${state} ${zipCode}`;
console.log(envelope);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
//
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const sentence = "Johnny Bravo \n1234 Flower St. \nLas Vegas, NV 89123";
const getSpace = sentence.substring(0, sentence.indexOf(" "));
console.log(getSpace);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// const endDate = new Date(2019, 3, 1);
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);
const middleDate = new Date((startDate.getTime() + endDate.getTime()) / 2);
console.log(middleDate);
