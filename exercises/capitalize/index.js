// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const arr = str.split(" ");

  for (let idx in arr) {
    arr[idx] = upperFirst(arr[idx]);
  }

  return arr.join(" ");
}

module.exports = capitalize;
