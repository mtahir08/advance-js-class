
/**
|--------------------------------------------------
| SIDE EFFECT | SHARED VARIALBES 
|--------------------------------------------------
*/
// Example 1(a)
let x = 2;
const add = () => x += 1;
const multiply = () => x *= 5;

add();
multiply();

// Example 1(b)

let x = 2;
const add = () => x += 1;
const multiply = () => x *= 5;

multiply();
add();
