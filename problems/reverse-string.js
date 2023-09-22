module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== 'string') throw TypeError('argument must be a number');
  let stringArray = string.split('');
  return stringArray.reverse().join('');
};
