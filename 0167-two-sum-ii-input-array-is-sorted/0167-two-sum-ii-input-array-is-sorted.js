/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map={};
    for (var i = 0; i < numbers.length; i++) {
     const complement = target - numbers[i]
     if(map[complement] !== undefined){
       return [map[complement] +1,i+1]
     }
     else{
       map[numbers[i]] = i
     }
    }
    return -1
};