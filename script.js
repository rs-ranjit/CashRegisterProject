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
const purchseBtn = document.getElementById("purchase-btn");
const changeText = document.getElementById("change-due");
const drawerText = document.getElementById("drawer-list");
let totalCash;
let totalDue = totalCash - cashEntered.value;
const changeList = document.getElementById("change-list");

purchseBtn.addEventListener("click", EnoughCashOrNot);

function EnoughCashOrNot() {
  let cash = cashEntered.value;
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else {
    return cash - price;
  }
}

function cidTotalCash() {
  let total = 0;
  cid.forEach(function (item) {
    total += item[1]; // Add the second element (the numeric value) to the total
  });
  return total;
}

function CheckIfCidIsEnough() {
  let cidTotalCash = cidTotalCash();
  let cashDue = EnoughCashOrNot();
  if (cidTotalCash < cashDue) {//check if the cash in drawer is enough    
    changeText.innerText += "Status: INSUFFICIENT_FUNDS";
  } else {
    if (cidTotalCash === cashDue) {//check if the cash in drawer and the cash due is equal
      changeText.innerText = "";
      changeText.innerText += "Status: CLOSED";
    }else{
       changeText.innerText = "";
        changeText.innerText += "Status: OPEN";
  
}
  }
}
