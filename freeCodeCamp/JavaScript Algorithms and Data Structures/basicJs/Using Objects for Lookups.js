function phoneticLookup(val) {
  let result = "";

  const obj = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = obj[val];

  return result;
}

phoneticLookup("charlie");
