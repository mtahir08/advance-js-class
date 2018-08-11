/**
|--------------------------------------------------
| FAT ARROW | ARROW | LAMBDA FUNCTION
|--------------------------------------------------
*/

// 1. Introduce in ES6
// 2. New way to write javascript function
// 3. Does not have its own this, arguments, super, or new.target.

// Normal
function Person() {
  this.age = 0;
  setInterval(function() {
    console.log('calling', this.age);
    this.age++;
  }, 1000);
}

// Fat Arrow
function Person() {
  this.age = 0;
  setInterval(() => {
    console.log('calling', this.age);
    this.age++;
  }, 1000);
}

// Normal
function Person() {
  this.age = 0;
  this.growUp = function() {
    console.log('calling', this.age);
    this.age++;
  };
  setInterval(this.growUp, 1000);
}

// Fat Arrow
function Person() {
  this.age = 0;
  this.growUp = () => {
    console.log('calling', this.age);
    this.age++;
  };
  setInterval(this.growUp, 1000);
}
