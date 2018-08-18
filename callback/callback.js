/**
|--------------------------------------------------
| CALLBACK
|--------------------------------------------------
*/

// - Any function that is passed as an argument
//      is called a callback function.
// - Callbacks are a way to make sure certain code doesn’t
//      execute until other code has already finished execution.

// BASIC | NORMAL

var a = 2,
  b = 3,
  c = 4;
function sum(a, b, c) {
  console.log('I am going to sum all values.');
  return a + b + c;
}
function average(value, num) {
  console.log('I am going to calculate average.');
  return value / num;
}
const sum_result = sum(a, b, c);
const avg_result = average(sum_result, 3);
console.log({ sum_result });
console.log({ avg_result });

// CALLBACK
var a = 2,
  b = 3,
  c = 4;
function sum(a, b, c) {
  console.log('I am going to sum all values.');
  return a + b + c;
}

function average(value, num, callback) {
  console.log('I am going to calculate average.');
  const result = value / num;
  callback(result);
}

var sum_result = sum(a, b, c);
console.log({ sum_result });

average(sum_result, 3, function(result) {
  console.log('Average of ' + a + ', ' + b + ' and ' + c + ' is ' + result);
});

// OR
var a = 2,
  b = 3,
  c = 4;
function sum(a, b, c) {
  console.log('I am going to sum all values.');
  return a + b + c;
}

function average(value, num, cb) {
  console.log('I am going to calculate average.');
  const result = value / num;
  cb(result);
  // cb is short form of callbackß
}
function callback(result) {
  console.log('Average of ' + a + ', ' + b + ' and ' + c + ' is ' + result);
}

var sum_result = sum(a, b, c);
average(sum_result, 3, callback);

// OR
var a = 2,
  b = 3,
  c = 4;
function callback(result) {
  console.log('Average of ' + a + ', ' + b + ' and ' + c + ' is ' + result);
}

function average(value, num, cb) {
  console.log('I am going to calculate average.');
  const result = value / num;
  cb(result);
  // cb is short form of callbackß
}

function sum(a, b, c, cb) {
  console.log('I am going to sum all values.');
  const result = a + b + c;
  cb(result, 3, callback);
}

sum(a, b, c, average);

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/
var a = 2,
  b = 3,
  c = 4;
function sum(a, b, c) {
  return setTimeout(function() {
    console.log('I am going to sum all values.');
    return a + b + c;
  }, 500);
}

function callback(result) {
  console.log('Average of ' + a + ', ' + b + ' and ' + c + ' is ' + result);
}

function average(val, num, callback) {
  console.log('I am going to calculate average.', val, num);
  const result = val / num;
  callback(result);
}

average(sum(a, b, c), 3, callback);
