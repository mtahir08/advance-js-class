/**
|--------------------------------------------------
| FUNCTIONAL PROGRAMMING
|--------------------------------------------------
*/

// 1) Easy to modularize—If I change one file, is another file affected?
// 2) Reusability—Is there a lot of duplication?
// 3) Testability—Do I struggle to unit test my functions?
// 4) Easy to reason about—Is my code unstructured and hard to follow?

/**
|--------------------------------------------------
| IMPERATIVE | DECLARATIVE PROGRAMMING
|--------------------------------------------------
*/

// IMPERATIVE IS HOW TO DO (OR) HOW YOU WANT IT DONE
// DECLARATIVE IS WHAT TO DO (OR) WHAT YOU WANT IT DONE

// IMPERATIVE
const oldValues = [10, 20, 35, 46, 57, 68, 79, 80];
const newValues = [];
for (var i = 0; i < oldValues.length; i++) {
  newValues.push(oldValues[i] + 5);
}
console.log(newValues);

// OR

const oldValues = [10, 20, 35, 46, 57, 68, 79, 80];
const newValues = [];
for (var i = 0; i < oldValues.length; i++) {
  const newValue = executeThisOnEachIterate(oldValues[i]);
  newValues.push(newValue);
}

function executeThisOnEachIterate(value) {
  return value + 5;
}

console.log(newValues);

// DECLARATIVE
const oldValues = [10, 20, 35, 46, 57, 68, 79, 80];
const newValues = oldValues.map(function(value, index) {
  return value + 5;
});

console.log(newValues);

// IMPERATIVE
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta'];
const cityToMatch = 'Islamabad';
let cityFound = false;

for (var i = 0; i < cities.length; i++) {
  //   console.log("index", i);
  if (cities[i] == cityToMatch) {
    cityFound = true;
    break;
  }
}
const match = cityFound ? 'found' : 'not found';
console.log(cityToMatch + ' ' + match + ' in city array.');

// DECLARATIVE
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta'];
const cityToMatch = 'Islamabad';
const cityFound = cities.some(function(value, index) {
  //   console.log("index", index);
  return value == cityToMatch;
});

const match = cityFound ? 'found' : 'not found';
console.log(cityToMatch + ' ' + match + ' in city array.');
