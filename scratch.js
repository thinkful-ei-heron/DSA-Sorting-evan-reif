// importing funcs from funcs.js
const funcs = require("./funcs");

let input = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
console.log(funcs.quickSort(input));

// pivot: 12
// array before swap: 14,17,13,15,19,10,3,16,9 [12]
// compare 14[j:0] and 10[i:0] =>
// array after swap: 10,17,13,15,19,14,3,16,9 [12]
// array before swap: 10,17,13,15,19,14,3,16,9 [12]
// compare 3[j:1] and 17[i:1]  =>
// array after swap: 10,3,13,15,19,14,17,16,9 [12]
// array before swap: 10,3,13,15,19,14,17,16,9 [12]
// compare 13[j:2] and 9[i:2]  =>
// array after swap: 10,3,9,15,19,14,17,16,13 [12]
// array before swap: 10,3,9,15,19,14,17,16,13 [12]
// comapre  15[j:3] and 12? =>
// array after swap: 10,3,9,12,19,14,17,16,13,15
pivot: 9;
