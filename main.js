let letterSearch = ["non", "asal", "banan", "olma", "aziza", "Gul", "mashina"];
let sozy = [];
let sozb = [];

for (soz1 of letterSearch) {
  if (soz1.includes("n")) {
    sozy.push(soz1);
  } else {
    sozb.push(soz1);
  }
}

console.log(sozb, 'N harfi ishirok etmagan sozlar');
console.log(sozy, 'N harfi ishtirok etgan sozlar');

