/* Write a function called **`filterAnagrams`** that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

**Understand the Problem:**
Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order. */


function filterAnagrams(arr, target) {
  // Create a Helper Function That Will Determine If A Given Word
  // Meets The Criteria To Be An Anagram Of The Target Word
  function isAnagram(word) {
    // If Comparing Word Isn't The Same Length As Target Word
    // Return False 
    if (word.length !== target.length) {
        return false;
    }

    // Loop Over Comparing Word To See If Each Letter
    // Is Included In The Target Word
    for (let i = 0; i < word.length; i++) {
        return target.includes(word[i]);
    }
  }

  // Filter Over Given Array While Using The Helper Function To
  // Determine Which Words Are Anagrams
  return arr.filter((word) => isAnagram(word));
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']