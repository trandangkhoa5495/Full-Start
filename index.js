function isprime(n) {
  let isprime = true;
  if (n < 2) {
    isprime = !isprime;
    return isprime;
  } else {
    for (let i = 2; i <= n; i++) {
      if (n % i == 0) {
        isprime = !isprime;
        break;
      }
    }
  }
  return isprime;
}
let prime = [];
for (let i = 0; i <= 1000; i++) {
  if (isprime(i)) {
    prime.push(i);
  }
}
console.log(prime);

function foottometter() {
  let met = document.querySelector("#feet").value;
  const met1 = met * 0.035;
  feet1.value = met1;
}

const products = ["sony", "LG", "nokia", "apple"];
function handleAdd() {
  const valueInput = document.querySelector("#add-product").value;
  products.push(valueInput);

  renderProducts(products);
}
renderProducts(products);

function renderProducts(data) {
  const table = document.querySelector("table");
  let contentTable = `<tr>
    <th>STT</th>
    <th>PRODUCTS</th>
    <th colspan="2">ACTION</th>
    </tr>`;
  data.forEach((product, index) => {
    contentTable += `<tr>
    <td>${index + 1}</td>
    <td>${product}</td>
    <td><button onclick="handleEdit(${index})">Edit</button></td>
    <td><button onclick="handleDelete(${index})">Delete</button></td>
  </tr>`;
  });
  table.innerHTML = contentTable;
}
