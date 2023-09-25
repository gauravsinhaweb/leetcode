/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let _num =[]
  let  num = x.toString().split('')
for (let n in num){
 let _n =  num[num.length-n-1]
_num.push(_n)
}

return x === + _num.join('')
};