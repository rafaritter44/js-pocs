const str = '3433-4545';
const newStr = '(x)';
console.log(str.replace('3', newStr)); // (x)433-4545
console.log(str.replace(/[3-5]/g, newStr)); // (x)(x)(x)(x)-(x)(x)(x)(x)
console.log(str.replace(/(3|4|5)/g, newStr)); // (x)(x)(x)(x)-(x)(x)(x)(x)