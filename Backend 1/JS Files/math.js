// const sum = (a, b) => a + b;
// const mult = (a, b) => a * b;
// const divide = (a, b) => a / b;
// const substract = (a, b) => a - b;
// const g = 9.8;
// const PI = 3.14159;

// let obj = {
//   sum: sum,
//   mult: mult,
//   divide: divide,
//   substract: substract,
//   g: g,
//   PI: PI,
// };

// module.exports = obj;

// ------------------------------------------------------This will aslo work---------------------------------------------------------------------------------
module.exports.sum = (a, b) => a + b;
module.exports.mult = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;
module.exports.substract = (a, b) => a - b;
module.exports.g = 9.8;
module.exports.PI = 3.14159;

// --------------------------------------------------------Shortcut Method----------------------------------------------------------------------------------------
exports.sum = (a, b) => a + b;
exports.mult = (a, b) => a * b;
exports.divide = (a, b) => a / b;
exports.substract = (a, b) => a - b;
exports.g = 9.8;
exports.PI = 3.14159;
