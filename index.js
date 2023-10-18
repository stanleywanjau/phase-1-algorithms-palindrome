function isPalindrome(word) {
  // Write your algorithm here
    // Step 1. Lowercase the word and use the RegExp to remove unwanted characters from it
  let re = /[\W_]/g;

  let lowRegword = word.toLowerCase().replace(re, '');
// Step 2. split the word and then reverse and join it together
  let reverseword = lowRegword.split('').reverse().join(''); 
//step 3. compare if the word look alike in reverse and in lowreg
  return reverseword === lowRegword;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting:true");
  console.log("=>",isPalindrome("a"))
}

module.exports = isPalindrome;
