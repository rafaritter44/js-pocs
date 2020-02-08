const str = 'ABCD';
console.log(str.charAt(str.search('BC'))); // B
console.log(str.charAt(str.search(/bc/i))); // B