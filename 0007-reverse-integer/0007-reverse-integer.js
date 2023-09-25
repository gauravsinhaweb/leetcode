/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let revNum=0;
  let sign =Math.sign(x)
  
  x = Math.abs(x)
  
   while(x>0){
    let temp = x%10
     x = Math.floor(x/10)
     revNum=revNum*10 + temp
   }
  if(revNum <  Math.pow(-2, 31) || revNum > 0x7FFFFFFF){
    return 0
  }
   return sign === -1 ? "-" + parseInt(revNum) : parseInt(revNum)
};