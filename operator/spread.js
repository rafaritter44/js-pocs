// ARRAY
const array = [1, 2];
const arrayCopy = [...array]; // const arrayCopy = array.slice();
array.push(3);
console.log(array);
console.log(arrayCopy);

// OBJECT
const obj = {
    a: 1,
    b: 2
};
const objCopy = {...obj};
obj.c = 3;
console.log(obj);
console.log(objCopy);