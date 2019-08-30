const fs = require('fs'); // node's module

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);