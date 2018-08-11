/**
|--------------------------------------------------
| PURE FUNCTION
|--------------------------------------------------
*/

// 1. The return value of the pure func­tions always depends on its arguments
// 2. Given the same set of argu­ments, you will always get the same return values
// 3. Do not have any side effects like net­work or data­base calls
// 4. Do not mod­ify the argu­ments which are passed to them

var a = 4,
  b = 5,
  c = 2;
function sum(a, b, c) {
  a = a + b;
  return a * c;
}

sum(a, b, c);
