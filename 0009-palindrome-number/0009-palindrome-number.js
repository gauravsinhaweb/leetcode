/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let num = x;
let rev = 0;
while(x>0){
   let temp = x%10;
   rev=(rev*10)+temp;
    x = Math.floor(x/10)
}
  if(x <  Math.pow(-2, 31) || x > Math.pow(2,31)){
    return 0
  }
return rev === num
};
