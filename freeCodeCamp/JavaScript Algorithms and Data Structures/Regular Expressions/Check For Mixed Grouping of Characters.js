// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters

let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin|Eleanor)(\s.{2}\s|\s)Roosevelt/i;
let result = myRegex.test(myString);
