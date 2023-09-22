function myMap(inputArray, callback) {
  // Your code here
  if (!Array.isArray(inputArray)) {
    throw new TypeError('first argument must be an array');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('myMap expects second argument to be a function')
  }

  let result = [];

  for (let el of inputArray) {
    result.push(callback(el));
  }

  // return inputArray.map(el => callback(el))
  return result;
}

// const arr = [1, 2, 3];
// const callback = (el) => el * 2;

// console.log(arr.map(el => callback(el)));
// console.log(myMap(arr, callback));


module.exports = myMap;
