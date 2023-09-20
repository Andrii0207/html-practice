// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newArray = firstArray.concat(secondArray).slice(0, maxLength)

//     console.log(newArray)
//     return newArray;
//     // Change code above this line
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)

// ========================================================================

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line

//     let message = "Access denied, wrong password!";

//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }

//     return console.log(message);
//     // Change code above this line
// }

// ========================================================================

// function getExtremeElements(array) {
//     // Change code below this line


//     return console.log([array[0], array[array.length - 1]])
//     // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]) 

// ========================================================================

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line

//     words = message.split(delimiter)
//     // Change code above this line
//     return console.log(words);
// }

// splitMessage('Mango hurries to the train', ' ')
// splitMessage('Mango', '')
// splitMessage('best_for_week', '_')

// ========================================================================

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     return console.log(message.split(" ").length * pricePerWord);

//     // Change code above this line
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);
// calculateEngravingPrice('Web-development is creative work', 20);

// ========================================================================

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line

//     string = array.join(delimiter);

//     // Change code above this line
//     return string;
// }

// ========================================================================

// function slugify(title) {
//     // Change code below this line

//     console.log(title.toLowerCase().split(" ").join("-"))

//     // Change code above this line
// }

// slugify('Arrays for begginers') // 'arrays-for-begginers'
// slugify('English for developer') // 'english-for-developer'
// slugify('Ten secrets of JavaScript') // 'ten-secrets-of-javascript'
// slugify('How to become a JUNIOR developer for TWO WEEKS') // 'how-to-become-a-junior-developer-for-two-weeks'

// ========================================================================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)

// ========================================================================

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     // const newArr = firstArray.concat(secondArray);

//     // if (newArr.length > maxLength) {
//     //     return console.log(newArr.slice(0, maxLength))
//     // }

//     if (firstArray.concat(secondArray).length >= maxLength) {
//         return console.log(firstArray.concat(secondArray).slice(0, maxLength))
//     }

//     // Change code above this line

// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) // ["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) // ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) // ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) // ["Earth", "Jupiter"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4) // 'Earth', 'Jupiter', 'Neptune', 'Uranus']

// ========================================================================

// function calculateTotal(number) {
//     // Change code below this line
//     let sum = 0;

//     for (let i = 1; i <= number; i += 1) {
//         sum += i;
//     }
//     return console.log(sum)
//     // Change code above this line
// }

// calculateTotal(1) // 1
// calculateTotal(3) // 6
// calculateTotal(7) // 28
// calculateTotal(18) // 171
// calculateTotal(24) // 300
// calculateTotal(2) // 3

// ========================================================================

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     // Change code above this line
//     return console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]) // 138
// calculateTotalPrice([164, 48, 291]) // 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // 1116

// ========================================================================

// function findLongestWord(string) {
//     // Change code below this line

//     const stringByWord = string.split(" ");
//     let longestWord = stringByWord[0];
//     // console.log("longestWord", longestWord)

//     for (let i = 1; i < stringByWord.length; i += 1) {

//         if (longestWord.length < stringByWord[i].length) {
//             longestWord = stringByWord[i];
//         }
//     }
//     return console.log(longestWord);
//     // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog") // jumped
// findLongestWord("Google do a roll") // Google
// findLongestWord("May the force be with you") // force

// ========================================================================

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//     // Change code above this line
//     return console.log(numbers);
// }

// createArrayOfNumbers(1, 3) // [1, 2, 3]
// createArrayOfNumbers(14, 17) // [14, 15, 16, 17]
// createArrayOfNumbers(29, 34) // [29, 30, 31, 32, 33, 34]

// ========================================================================

// function filterArray(numbers, value) {
//     // Change code below this line
//     const arr = [];


//     for (let i = 0; i < numbers.length; i += 1) {

//         if (numbers[i] > value) {
//             arr.push(numbers[i])
//         }
//     }
//     return console.log(arr)
//     // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // [5]
// filterArray([1, 2, 3, 4, 5], 5) // []
// filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]

// ========================================================================

// function checkFruit(fruit) {
//     const fruitsArray = ["apple", "plum", "pear", "orange"];

//     return console.log(fruitsArray.includes(fruit)); // Change this line
// }

// checkFruit("plum") // true
// checkFruit("mandarin") // false
// checkFruit("pear") // true
// checkFruit("Pear") // false
// checkFruit("apple") // true

// ========================================================================

// let total = 0;
// let value;
// do {
//     value = prompt("введіть число");
//     if (!isNaN(value)) {
//         total += Number(value);
//     }
// } while (value !== null);

// console.log(total);

// ========================================================================

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let newArray = [];

//     for (const item of array1) {
//         if (array2.includes(item)) {
//             newArray.push(item)
//         }
//     }
//     return console.log(newArray)

//     // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]) // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // []

// ========================================================================

// function getEvenNumbers(start, end) {
//     // Change code below this line
//     let evenArray = [];

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenArray.push(i)
//         }
//     }
//     return console.log(evenArray)

//     // Change code above this line
// }

// getEvenNumbers(2, 5) // [2, 4]
// getEvenNumbers(3, 11) // [4, 6, 8, 10]
// getEvenNumbers(6, 12) // [6, 8, 10, 12]
// getEvenNumbers(8, 8) // [8]
// getEvenNumbers(7, 7) // []

// ========================================================================

// function includes(array, value) {
//     // Change code below this line

//     for (const item of array) {
//         if (item === value) {
//             return console.log(true)
//         }
//     }
//     return console.log(false)
//     // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3) // true
// includes([1, 2, 3, 4, 5], 17) // false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") // true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") // false
// includes(["apple", "plum", "pear", "orange"], "plum") // true
// includes(["apple", "plum", "pear", "orange"], "kiwi") // false

// ========================================================================

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//     keys.push(key)
//     values.push(apartment[key])
// }
// console.log("keys:", keys)
// console.log("values:", values)

// ========================================================================

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//     // Change code above this line
// }

// ========================================================================

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line

//     for (const key in object)
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     // Change code above this line
//     return console.log(propCount);
// }

// countProps({}) // 0
// countProps({ name: "Mango", age: 2 }) // 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // 3

// ========================================================================

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);


// for (const key of keys) {
//     values.push(apartment[key])
// }

// ========================================================================

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line

//     const salaryOfEmployes = Object.values(salaries)

//     for (const salary of salaryOfEmployes) {
//         totalSalary += salary;
//     }

//     // Change code above this line
//     return totalSalary;
// }

// countTotalSalary({}) // 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) // 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) // 400

// ========================================================================

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }

// console.log("hexColors", hexColors)
// console.log("rgbColors", rgbColors)

// ========================================================================