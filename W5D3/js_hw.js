function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`)
}

// madLib("help", "endangered", "rhino")
function isSubstring(searchString, subString) {
  console.log( searchString.includes(subString))
}
// isSubstring("time to program", "time");
// isSubstring("time to program", "timez");

function fizzBuzz(array) {
  const fizzBuzzarr = [];

  array.forEach(el => {
    if ((el%3 === 0) ^ (el%5 === 0)) {
      fizzBuzzarr.push(el);
    }
  });
  console.log( fizzBuzzarr)
}


// fizzBuzz([1,2,3,4,5,6,7,8,9])

function isPrime(number) {
  if (number < 2) {return false;}
  for (let i = 2; i < number; i++) {
    if (number%i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(5));
// console.log(isPrime(71));
// console.log(isPrime(39));
// console.log(isPrime());


function sumOfNPrimes (n) {

  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }
  return sum;
}

// console.log(sumOfNPrimes(10))

function titleize (arrayofnames, callback) {
  let titleized = arrayofnames.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

// titleize(["mike","adrian","kanji"], (names) => {names.forEach(name => console.log(name));
// });

function Elephant(name, height, trickarray) {
  this.name = name;
  this.height = height;
  this.trickarray = trickarray;
  Elephant.prototype.trumpet = function() {
    console.log(`${name} the elephant goes phrrrrr`)
  }

Elephant.prototype.grow = function() {
  height += 12;
  console.log(`${height}`)
}
Elephant.prototype.addTrick = function(trick) {
  trickarray.push(trick);
}
Elephant.prototype.play = function() {
  var trick = trickarray[Math.floor(Math.random()*trickarray.length)];
  console.log(`${name} is ${trick}`)
}
}

const yudi = new Elephant("Yudi", 7, ["gives a kiss"])

// yudi.trumpet();
// yudi.height;
// yudi.grow();
// yudi.height;
// yudi.play();
// yudi.addTrick("buys a beer");
// yudi.addTrick("cuddles warmly");
// yudi.play();
// yudi.play();
// yudi.play();
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];
Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};

let order = dinerBreakfast();
order("vegan sausage");
order("vegan sleep");
