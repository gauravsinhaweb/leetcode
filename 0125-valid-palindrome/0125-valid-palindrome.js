/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     const word = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
    let left = 0
    let right = word.length - 1
   for (var i = 0; i < word.length; i++) {
      if(word[left] !== word[right]){
        return false
      }
        left++;
        right--;
   }
   return true
};