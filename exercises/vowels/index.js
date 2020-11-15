// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const count = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (const idx in str) {
    const char = str.charAt(idx).toLowerCase();

    if (count[char] >= 0) count[char]++;
  }

  return Object.values(count).reduce((a, b) => a + b);
}

module.exports = vowels;
