// ## Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// ## Get Even
// 1. Write a`for` loop that will log only the even numbers in 0 through 200.

for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every ** even ** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

/////I THINK THIS NEEDS AN ARRAY OF RESPONSES AND A WHILE LOOP....COME BACK TO THIS

//const months = ["January", "February", "March", "April", "May", "June", "July"];

//const random = Math.floor(Math.random() * months.length);
//console.log(random, months[random]);

const kitten = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
const random = Math.floor(Math.random() * kitten.length);

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(random, kitten[random]);
  } else {
    console.log("Love me, pet me! HSSSSSSS!");
  }
}

//for (let i = 1; i < 21; i++) {
//if (i % 2 === 0) {
//console.log(Math.random["...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..."])
//} else {
// console.log("Love me, pet me! HSSSSSS!");
//}
//}

// console.log(i);

// ## Fizz Buzz

// Write a javascript application that logs all numbers from 1 - 100 ** AND **:

// 1. If a number is divisible by 3 log "Fizz" instead of the number.

// 1. If a number is divisible by 5 log "Buzz" instead of the number.

// 1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
  else console.log(i);
}

// ## Getting to Know You
// Use the following arrays to answer the questions below (name, age, hometown):
// ```javascript
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];
// ```
// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the `kenny` array and replace it with "Gameboy".

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`]

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";

console.log(kenny);

jimClark[1] = jimClark[1] + 1;

console.log(jimClark);

ryan[2] = "Gotham City";

console.log(ryan);

reuben.pop();
reuben.push("Chicago");

console.log(reuben);

jimHaff.pop();

jimHaff.push("Nashville", "Austin", "Seattle");

console.log(jimHaff);

let removed = jimHaff.splice(2, 1);

console.log(jimHaff);

// ## Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// 2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.

// 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (i = 0; i < ninjaTurtles.length; i++) {
  ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
}
console.log(ninjaTurtles);

// ## Return of the Closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

const thomsCloset = [
  (thomsShirts = [
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ]),
  (thomsPants = ["grey jeans", "jeans", "PJs"]),
  (thomsAccessories = ["wool mittens", "wool scarf", "raybans"]),
];

// ### Alien Attire
// 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

let kristynsShoe = kristynsCloset.splice(0, 1);
thomsCloset[2].push(kristynsShoe);

console.log(thomsCloset[2]);

// ### Dress 'em Up
//1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

//### Dirty Laundry
//Continue looking at the closet arrays:
//1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

//### Inventory
//2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
