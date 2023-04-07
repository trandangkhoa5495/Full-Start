function sub() {
  const value = document.querySelector("#import").value;
  const arr = value.split(",");
  let total = document.querySelector("#results");

  let resuit = "";
  let count = 0;
  for (const number of arr) {
    if (Number(number) >= 10) {
      count++;
      resuit += number + " ";
    }
  }
  total.value = count;
}

function sub1() {
  const value = document.querySelector("#import1").value;
  const arr = value.split(",");
  let total = document.querySelector("#results1");

  let max = arr[0];
  let index;
  for (let i = 1; i < arr.length; i++) {
    if (Number(arr[i]) > max) {
      max = arr[i];
      index = i;
    }
  }
  total.value = max;
}

function sub9() {
  const value = document.querySelector("#import9").value;
  const value1 = document.querySelector("#import91").value;
  const arr = value.split(",");
  const arr1 = value1.split(",");

  // const arr2 = arr;
  let total = document.querySelector("#results9");

  arr2 = arr.concat(arr1);
  console.log(arr2);

  // for (const item of arr1) {
  //   arr2.push(item);
  // }
  total.value = arr2;
}

// Luyện tập 2
// bài 1
const newArr = [];
function add1() {
  const value = document.querySelector("#import11").value;
  const arr = value.split(",");
  newArr.push(arr);
  sub11(newArr);
}
function sub11(data) {
  const mytable = document.querySelector("#table");
  let contenttable = "";

  for (let row = 0; row < data.length; row++) {
    contenttable += "<tr>";

    for (let col = 0; col < data[0].length; col++) {
      contenttable += `<td>${data[row][col]}</td>`;
    }
    contenttable += "</tr>";
  }
  mytable.innerHTML = contenttable;
}

// luyện tập 2
// bài làm thêm

// const newArr1 = [];
function add12() {
  const value1 = document.querySelector("#import12").value;
  const arr1 = value1.split(" ");
  // newArr1.push(arr1);
  sub12(arr1);
}
function sub12(data) {
  const mytable1 = document.querySelector("#table2");
  let contenttable1 = "";

  for (let row = 0; row < data.length; row++) {
    contenttable1 += "<tr>";

    contenttable1 += `<td>${row + 1}</td><td>${
      data[row]
    }</td><td><button>Edit</button></td>`;
  }

  contenttable1 += "</tr>";
  mytable1.innerHTML += contenttable1;
}
