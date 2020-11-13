// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const fizz = (k) => k % 3 === 0;
  const buzz = (k) => k % 5 === 0;
  const fizzAndBuzz = (k) => fizz(k) && buzz(k);

  for (let i = 1; i <= n; i++) {
    if (fizzAndBuzz(i)) console.log("fizzbuzz");
    else if (fizz(i)) console.log("fizz");
    else if (buzz(i)) console.log("buzz");
    else console.log(i);
  }
}

module.exports = fizzBuzz;
