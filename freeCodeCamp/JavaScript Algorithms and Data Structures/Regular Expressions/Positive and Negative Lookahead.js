// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
