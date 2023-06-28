function isPalindrome(word) {
  // Remove any non-letter characters and convert to lowercase
  const cleanedWord = word.replace(/[^a-z]/gi, '').toLowerCase();

  // Reverse the cleaned word
  const reversedWord = cleanedWord.split('').reverse().join('');

  // Compare the cleaned word with the reversed word
  return cleanedWord === reversedWord;
}

// Custom tests
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
