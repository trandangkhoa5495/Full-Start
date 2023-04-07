// bài test

const drinks = ["coca", "pepsi", "miranda", "redbull", "sevenup"];
const productlist = document.querySelector(".drinklist");

let content = "";

for (const drink of drinks) {
  content += `<li> ${drink} </li>`;
}
productlist.innerHTML = content;

//  bài 1 session 14

const mycolor = ["red", "green", "white", "black"].toString();
console.log(mycolor);

// bài 2 session 14

const resuit = document.querySelector("#content");
let total = "";
function submit() {
  const valuenumber = document.querySelector("#number").value;
  for (i = 0; i < valuenumber.length; i++) {
    if (valuenumber[i] % 2 == 0 && valuenumber[i + 1] % 2 == 0) {
      total += valuenumber[i] + "-";
    } else {
      total += valuenumber[i];
    }
  }
  resuit.innerHTML = total;
}

// bài 3

const resuit1 = document.querySelector("#conten1");

function submit1() {
  const valuenumber1 = document.querySelector("#number1").value;

  let UPPER = "ABCDEFGHIKLMNOPQTUVXYZW";
  let convertstr = "";

  for (let k = 0; k < valuenumber1.length; k++) {
    let isUpper = false;
    for (let i = 0; i < UPPER.length; i++) {
      if (valuenumber1[k] == UPPER[i]) {
        isUpper = true;
        break;
      }
    }
    if (isUpper) {
      convertstr += valuenumber1[k].toLowerCase();
    } else {
      convertstr += valuenumber1[k].toUpperCase();
    }
  }
  resuit1.innerHTML = convertstr;
}

// bài 4

const resuit2 = document.querySelector("#conten2");

function submit3() {
  const value1 = document.querySelector("#number2").value;

  let ENGLISH = ["hello", "goodbye", "apple", "pineapple", "phone"];
  let VIETNAM = ["xin chào", "tạm biệt", "quả táo", "quả thơm", "điện thoại"];
  let convertstr1 = "";

  for (let i = 0; i < ENGLISH.length; i++) {
    if (ENGLISH[i] == value1.toLowerCase()) {
      convertstr1 = VIETNAM[i];
    } else if (VIETNAM[i] == value1.toLowerCase()) {
      convertstr1 = ENGLISH[i];
    }
    resuit2.innerHTML = convertstr1;
  }
}

//  bài 5:
function number1() {
  let count = 0;
  const str = "Tôi là thằng mập";
  string = string.split("");
  let value2 = document.querySelector("value1");
}
