let count = 0;
const addOneCards = [2, 3, 4, 5, 6];
const subtractCards = [10, "J", "Q", "K", "A"];
function cc(card) {
  addOneCards.includes(card)
    ? count++
    : subtractCards.includes(card)
    ? count--
    : null;
  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
