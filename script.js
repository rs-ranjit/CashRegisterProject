let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashEntered = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDueTxt = document.getElementById("change-due");
const cidText = document.getElementById("cid");

function EnoughCash() {
  if (cashEntered.value < price)
    alert("Customer does not have enough money to purchase the item");
}

function NoDueCheck() { }

function cidDisplay(array) {
  let total = 0;
  array.forEach((i) => {
    cidText.innerHTML += `${i[0]}: $${i[1]}<br>`;
  });
  return total;
}
cidDisplay(cid);

function DueCalc() {
  if (cashEntered.value == price) {
    changeDueTxt.innerText = "No change due - customer paid with exact cash";
    return 1;
  } else {
    let changeDue = cashEntered.value - price; // The change Due
    //the description of the name of the currency and the value of the currency in dollars.
    let denominations = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ];

    let register = [...cid].reverse();
    let change = [];

    for (let [name, value] of denominations.reverse()) {
      let currentDenom = register.find(([currency]) => currency === name);
      if (!currentDenom) continue;
      let [currency, totalInCid] = currentDenom;
      let toGive = 0;

      while (changeDue >= value && totalInCid > 0) {
        toGive += value;
        totalInCid -= value;
        changeDue -= value;
        changeDue = Math.round(changeDue * 100) / 100; // Avoid floating point issues
      }
      if (toGive > 0) {
        change.push([currency, toGive]);
      }
    }

    if (changeDue > 0) {
      return "Status: INSUFFICIENT_FUNDS";
    }
    return change;
  }
}

function changeDisplay(array) {
  if(DueCalc() ===1){
    DueCalc();
  }
  else{ let total = 0;
  changeDueTxt.innerHTML += `<p>Status:OPEN</p><br>`;
  array.forEach((i) => {
    changeDueTxt.innerHTML += `: $${i}<br>`;
    total += i[1];
  });
  return total;
}
}

purchaseBtn.addEventListener("click", () => {
  EnoughCash(), NoDueCheck(), changeDisplay(DueCalc());
});
