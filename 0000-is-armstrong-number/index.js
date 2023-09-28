// approach 1

function isArmstrong(num) {
  let d = num.toString().split("");
  let sum = 0;
  for (var i = 0; i < d.length; i++) {
    sum += Math.pow(d[i], d.length);
  }
  return sum === num;
}

// approach 2

function isArmstrong(num) {
  let originalNum = num;
  let count = 0;
  let temp = num;
  let sum = 0;
  while (temp != 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, count);
    num = Math.floor(num / 10);
  }
  return sum === originalNum;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(1634)); // true
