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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

// function getExtremeElements(array) {
//     // Change code below this line


//     return console.log([array[0], array[array.length - 1]])
//     // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]) 

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     return console.log(message.split(" ").length * pricePerWord);

//     // Change code above this line
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);
// calculateEngravingPrice('Web-development is creative work', 20);

// =========================================================================================================
// =========================================================================================================

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line

//     string = array.join(delimiter);

//     // Change code above this line
//     return string;
// }

// =========================================================================================================
// =========================================================================================================

// function slugify(title) {
//     // Change code below this line

//     console.log(title.toLowerCase().split(" ").join("-"))

//     // Change code above this line
// }

// slugify('Arrays for begginers') // 'arrays-for-begginers'
// slugify('English for developer') // 'english-for-developer'
// slugify('Ten secrets of JavaScript') // 'ten-secrets-of-javascript'
// slugify('How to become a JUNIOR developer for TWO WEEKS') // 'how-to-become-a-junior-developer-for-two-weeks'

// =========================================================================================================
// =========================================================================================================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

// function checkFruit(fruit) {
//     const fruitsArray = ["apple", "plum", "pear", "orange"];

//     return console.log(fruitsArray.includes(fruit)); // Change this line
// }

// checkFruit("plum") // true
// checkFruit("mandarin") // false
// checkFruit("pear") // true
// checkFruit("Pear") // false
// checkFruit("apple") // true

// =========================================================================================================
// =========================================================================================================

// let total = 0;
// let value;
// do {
//     value = prompt("введіть число");
//     if (!isNaN(value)) {
//         total += Number(value);
//     }
// } while (value !== null);

// console.log(total);

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

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

// =========================================================================================================
// =========================================================================================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line

//     for (const product of products) {

//         if (product.name === productName) {
//             return console.log(product.price);
//         }
//     }
//     return null

//     // Change code above this line
// }

// getProductPrice("Radar") // 1300
// getProductPrice("Grip") // 1200
// getProductPrice("Scanner") // 2700
// getProductPrice("Droid") // 400
// getProductPrice("Engine") // null

// =========================================================================================================
// =========================================================================================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//     // Change code below this line

//     let arr = []

//     for (const product of products) {
//         const keys = Object.keys(product)

//         for (const key of keys) {
//             if (key === propName) {
//                 arr.push(product[propName])
//             }
//         }
//     }
//     return console.log(arr)
//     // Change code above this line
// }

// getAllPropValues("name") // ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity") // [4, 3, 7, 9]
// getAllPropValues("price") // [1300, 2700, 400, 1200]
// getAllPropValues("category") // []

// =========================================================================================================
// =========================================================================================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     for (const product of products) {
//         if (product.name === productName) {
//             return console.log(product.price * product.quantity)
//         }
//     }
//     return 0;

//     // Пиши код выше этой строки
// }

// calculateTotalPrice("Blaster") // 0
// calculateTotalPrice("Radar") // 5200
// calculateTotalPrice("Droid") // 2800
// calculateTotalPrice("Grip") // 10800
// calculateTotalPrice("Scanner") // 8100

// =========================================================================================================
// =========================================================================================================

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
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// =========================================================================================================
// =========================================================================================================

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const { today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" }, tomorrow: { high: highTomorrow, low: lowTomorrow, tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// console.log(highToday, lowToday, todayIcon)
// console.log(highTomorrow, lowTomorrow, tomorrowIcon)

// =========================================================================================================
// =========================================================================================================

// // Change code below this line
// function calculateMeanTemperature(forecast) {

//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;


//     // Change code above this line
//     return console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }) // 28.5
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }) // 37

// =========================================================================================================
// =========================================================================================================

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line

//     return console.log({ completed, category, priority, ...data })

//     // Change code above this line
// }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: "Finance", text: "Take interest" }) // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" }) // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" }) // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// =========================================================================================================
// =========================================================================================================

// // Change code below this line
// function add(...args) {
//     let sum = 0;
//     console.log(args)
//     for (const arg of args) {
//         sum += arg
//     }
//     return console.log(sum)
//     // Change code above this line
// }

// add(15, 27) // 42
// add(12, 4, 11, 48) // 75
// add(32, 6, 13, 19, 8) // 78
// add(74, 11, 62, 46, 12, 36) // 241

// =========================================================================================================
// =========================================================================================================

// // Change code below this line
// function findMatches(firstArg, ...args) {
//     const matches = []; // Don't change this line

//     for (const arg of args) {
//         if (firstArg.includes(arg)) {
//             matches.push(arg);
//         }
//     }

//     // Change code above this line
//     return console.log(matches);
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) // [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) // [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) // [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16) // []

// =========================================================================================================
// =========================================================================================================

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return console.log("Returning all books");
//     },
//     addBook(bookName) {
//         return console.log(`Adding book ${bookName}`);
//     },
//     removeBook(bookName) {
//         return console.log(`Deleting book ${bookName}`)
//     },
//     updateBook(oldName, newName) {
//         return console.log(`Updating book ${oldName} to ${newName}`)
//     }
//     // Change code above this line
// };

// bookShelf.getBooks() // "Returning all books"
// bookShelf.addBook("Haze") // "Adding book Haze"
// bookShelf.removeBook("Red sunset") // "Deleting book Red sunset"
// bookShelf.updateBook("Sands of dune", "Dune") // "Updating book Sands of dune to Dune"

// =========================================================================================================
// =========================================================================================================

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line

//         const index = this.books.indexOf(oldName)
//         this.books.splice(index, 1, newName)
//         console.log(this.books)
//         // Change code above this line
//     },

// };

// bookShelf.updateBook("Haze", "Dungeon chronicles") // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// bookShelf.updateBook("The last kingdom", "Dune") // ["Dune", "Haze", "The guardian of dreams"]

// =========================================================================================================
// =========================================================================================================

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line

//         const index = this.potions.indexOf(potionName)
//         this.potions.splice(index, 1)
//         console.log(this.potions)
//         // Change code above this line
//     },
// };

// atTheOldToad.removePotion("Dragon breath") // ["Speed potion", Stone skin"]
// atTheOldToad.removePotion("Speed potion") / ["Stone skin"]

// =========================================================================================================
// =========================================================================================================

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         for (const potion of this.potions) {

//             if (potion.name === newPotion.name) {
//                 return console.log(`Error! Potion ${newPotion.name} is already in your inventory!`)
//             }
//         }
//         this.potions.push(newPotion);
//         return console.log(this.potions)
//     },

//     removePotion(potionName) {
//         for (const potion of this.potions) {

//             if (potion.name === potionName) {
//                 const index = this.potions.indexOf(potion);
//                 this.potions.splice(index, 1)
//                 return console.log(this.potions);
//             }
//         }
//         return console.log(`Potion ${potionName} is not in inventory!`);
//     },

//     updatePotionName(oldName, newName) {

//         for (const potion of this.potions) {

//             if (potion.name === oldName) {
//                 return potion.name = newName;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//         // Change code above this line
//     }
// }

// atTheOldToad.getPotions()
// atTheOldToad.addPotion({ name: "Power potion", price: 270 }) // [{ name: "Speed potion", price: 460 },{ name: "Dragon breath", price: 780 },{ name: "Stone skin", price: 520 }, { name: "Power potion", price: 270 }]
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }) // [{ name: "Speed potion", price: 460 },{ name: "Dragon breath", price: 780 },{ name: "Stone skin", price: 520 }, { name: "Invisibility", price: 620 }]
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) // "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 }) // "Error! Potion Stone skin is already in your inventory!"
// // atTheOldToad.removePotion("Dragon breath") // [{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// // atTheOldToad.removePotion("Speed potion") // [{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth") // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion") // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 }]

// =========================================================================================================
// =========================================================================================================

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {

//         if (!this.pizzas.includes(pizzaName)) {
//             return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//         }
//         return onSuccess(pizzaName)

//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// =========================================================================================================
// =========================================================================================================

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }

//     orderedItems.forEach((item) => {
//         totalPrice += item;
//         return
//     })


//     // Change code above this line
//     return console.log(totalPrice);
// }

// calculateTotalPrice([12, 85, 37, 4]) // 138
// calculateTotalPrice([164, 48, 291]) // 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // 1116

// =========================================================================================================
// =========================================================================================================

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         filteredNumbers.push(numbers[i]);
//     //     }
//     // }

//     numbers.forEach(el => {
//         if (el > value) {
//             filteredNumbers.push(el)
//         }
//     });

//     // Change code above this line
//     return console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // [5]
// filterArray([1, 2, 3, 4, 5], 5) // []
// filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]

// =========================================================================================================
// =========================================================================================================

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }

//     firstArray.forEach(el => {
//         if (secondArray.includes(el)) {
//             commonElements.push(el)
//         }
//     });


//     return console.log(commonElements);
//     // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]) // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // []

// =========================================================================================================
// =========================================================================================================


// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// const filterArray = (numbers, value) => {

//     const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // [5]
// filterArray([1, 2, 3, 4, 5], 5) // []
// filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]

// =========================================================================================================
// =========================================================================================================

// function changeEven(numbers, value) {
//     // Change code below this line

//     const newNumbers = Array.from(numbers)
//     console.log(newNumbers)

//     for (let i = 0; i < newNumbers.length; i += 1) {


//         if (newNumbers[i] % 2 === 0) {
//             newNumbers[i] = newNumbers[i] + value;
//         }
//     }
//     return console.log(newNumbers);
//     // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10) // [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10) // [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100) // [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100) // [144, 13, 81, 192, 136, 154]

// ==============================================================================================
// ==============================================================================================

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);

// // ['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']

// let arr = [];

// const uniqueGenres = allGenres.filter((item, index, array) => array.indexOf(item) === index)

// console.log(uniqueGenres)

// ===========================================================================================
// ===========================================================================================

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]


// const getUsersWithEyeColor = (users, color) => {

//     return users.filter(user => user.eyeColor === color)

// };

// console.log(getUsersWithEyeColor(users, "green"))

// ===========================================================================================
// ===========================================================================================

const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 37
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
        age: 27
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
        age: 38
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 39
    }
]

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     const friends = [];

//     users.filter(user => {
//         if (user.friends.includes(friendName)) {
//             friends.push(user)
//         }

//     })
//     return friends;
// };

// console.log(getUsersWithFriend(users, "Briana Decker"))

// // "Briana Decker",  [Sharlene Bush, Sheree Anthony]
// // "Goldie Gentry", [Elma Head, Sheree Anthony]
// // "Adrian Cross", []

// ===========================================================================================
// ===========================================================================================

// Change code below this line
// const getFriends = (users) => {

//     return users.flatMap(user => user.friends).filter((user, idx, array) => array.indexOf(user) === idx);

// };
// // Change code above this line

// console.log(getFriends(users))

// ===========================================================================================
// ===========================================================================================

// Change code below this line
// const isAnyUserActive = users => {
//     console.log(users.isActive)
//     return users.some(user => user.isActive)
// };

// console.log(isAnyUserActive(users))

// ===========================================================================================
// ===========================================================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// ===========================================================================================
// ===========================================================================================

// // Change code below this line
// const sortByDescendingFriendCount = users => {
//     return users.sort((a, b) => b.friends.length - a.friends.length)
// };
// // Change code above this line

// console.log(sortByDescendingFriendCount(users))

// ===========================================================================================
// ===========================================================================================

// // Change code below this line
// const sortByName = users => {
//     return [...users].sort((a, b) => a.name.localeCompare(b.name))
// };
// // Change code above this line

// ===========================================================================================
// ===========================================================================================

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(({ rating }) => rating > MIN_BOOK_RATING).map(user => user.author).sort((a, b) => a.localeCompare(b))

// console.log(names) // ['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']

// ===========================================================================================
// ===========================================================================================

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//     return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)


// };
// // Change code above this line
// console.log(getNamesSortedByFriendCount(users)) // ['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']

// ===========================================================================================
// ===========================================================================================

// // Change code below this line
// const getSortedFriends = users => {
//     return users.flatMap(user => user.friends).filter((friend, idx, array) => array.indexOf(friend) === idx).sort((a, b) => a.localeCompare(b))
// };
// // Change code above this line

// console.log(getSortedFriends(users))

// ===========================================================================================
// ===========================================================================================

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//     return users.filter(user => user.gender === gender).reduce((inValue, el, idx, array) => inValue + el.balance, 0)
// };
// // Change code above this line
// console.log(getTotalBalanceByGender(users, "male")) // 12053
// console.log(getTotalBalanceByGender(users, "female")) // 8863

// ===========================================================================================
// ===========================================================================================

// function showThis() {
//     console.log("this in showThis: ", this);
// }

// showThis()

// const user = {
//     username: "Mango",
// };

// user.showContext = showThis;

// user.showContext()

// ===========================================================================================

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName)

// ===========================================================================================

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//     username: "Манго",
// };
// const poly = {
//     username: "Полі",
// };

// greetGuest.apply(mango, ["Ласкаво просимо"])
// greetGuest.call(poly, ["З прибуттям"])

// ===========================================================================================

// function greet(clientName) {
//     return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//     service: "Steam",
// };

// const steamGreeter = greet.bind(steam)

// console.log(steamGreeter("Манго"))

// ===========================================================================================

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//         console.log(" this -->", this)
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer))


// console.log(customer)

// ===========================================================================================

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };

// ===========================================================================================

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ===========================================================================================

// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };

// ===========================================================================================

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child)

// ===========================================================================================

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// ===========================================================================================

// class Car {
//     // Change code below this line

//     constructor(brand, model, price) {

//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     // Change code above this line
// }

// const audi = new Car("Audi", "Q3", 36000) // { brand: "Audi", model: "Q3", price: 36000 }
// const bmw = new Car("BMW", "X5", 58900) // { brand: "BMW", model: "X5", price: 58900 }
// const nissan = new Car("Nissan", "Murano", 31700) // { brand: "Nissan", model: "Murano", price: 31700 }

// console.log(audi)
// console.log(bmw)
// console.log(nissan)

// ===========================================================================================

// class Storage {
//     constructor(items) {
//         console.log(items)

//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         return this.items.push(newItem)
//     }

//     removeItem(itemToRemove) {
//         const idx = this.items.indexOf(itemToRemove)
//         return this.items.splice(idx, 1)
//     }

// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ===========================================================================================

// class StringBuilder {

//     constructor(initialValue) {
//         this.value = initialValue;
//     }

//     getValue() {
//         return this.value
//     }

//     padStart(str) {
//         this.value = str + this.value;
//     }

//     padEnd(str) {
//         this.value = this.value + str;
//     }

//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ===========================================================================================

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//         this.blacklistedEmails = [];
//     }

//     blacklist(email) {
//         return this.blacklistedEmails.push(email)
//     }

//     isBlacklisted(email) {
//         if (email.includes(this.blacklistedEmails)) {
//             return true
//         }
//         return false
//     }

//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// ===========================================================================================
