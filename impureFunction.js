/**
|--------------------------------------------------
| IMPURE FUNCTION
|--------------------------------------------------
*/

// 1. The return value of the pure func­tions always depends on its arguments
// 2. Given the same set of argu­ments, you might get different return values
// 3. May have side effects like net­work or data­base calls
// 4. May mod­ify the argu­ments which are passed to them

var a = 4,
  b = 5,
  c = 2;
function sum() {
  a = a + b;
  return a * c;
}

sum();
