// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches
let timStr = "Timmmmber";
let timRegex = /[^m]+m{4}[^m]+/i;
let result = timRegex.test(timStr);
