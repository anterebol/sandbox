// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end

let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)|(\s*)$/g;
let result = hello.replace(wsRegex, "");
