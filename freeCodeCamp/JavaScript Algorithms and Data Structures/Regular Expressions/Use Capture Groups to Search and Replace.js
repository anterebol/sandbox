// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
console.log(result);
