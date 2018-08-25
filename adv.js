/**
|--------------------------------------------------
| Object Destructuring, Default Values
|--------------------------------------------------
*/
// Destructuring
const obj = {
  name: 'Tahir',
  email: 'example@gmail.com'
};
// Normal
const name = obj.name;
const email = obj.email;
// es6
const { name, email } = obj;

// Default Values
const obj = {
  name: 'tahir',
  email: 'example@gmail.com'
};
// Normal
const name = obj.name ? obj.name : 'Arsalan';
const email = obj.email ? obj.email : 'example@example.com';
// es6
const { name = 'Arsalan', email = 'example@example.com' } = obj;

/**
|--------------------------------------------------
| Array Destructuring, Default Values
|--------------------------------------------------
*/
// Destructuring

const arr = [3, 4, 5, 6];

// Normal
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

// es6
const [a, b, c, d] = arr;

// Default Values

const arr = [3, 4, 5, 6];
// Normal
const a = arr[0] ? arr[0] : 13; // or arr[0] || 13
const b = arr[1] ? arr[1] : 14; // or arr[1] || 14
const c = arr[2] ? arr[2] : 15; // or arr[2] || 15
const d = arr[3] ? arr[3] : 16; // or arr[3] || 16

// es6
const [a = 13, b = 14, c = 15, d = 16] = arr;


