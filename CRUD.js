const dataUser = [
  {
    id: 1,
    avatar: "ava1.jpg",
    name: "Orange Juice",
    price: "35000",
  },
  {
    id: 2,
    avatar: "ava2.jpg",
    name: "Banana Juice",
    price: "36000",
  },
  {
    id: 3,
    avatar: "ava3.png",
    name: "Pineapple Juice",
    price: "37000",
  },
  {
    id: 4,
    avatar: "ava4.jpg",
    name: "Lemon Juice",
    price: "38000",
  },
  {
    id: 5,
    avatar: "ava5.jpg",
    name: "Watermelon Juice",
    price: "39000",
  },
];
renderdata(dataUser);

function renderdata(data) {
  const table = document.querySelector("table");
  let datatable = `
  <tr>
    <th>NO</th>
    <th>Avatar</th>
    <th>Name</th>
    <th>Price</th>
    <th>Action</th>
  </tr>`;
  data.forEach((dataUser, id) => {
    datatable += `<tr>
    <td>${dataUser.id}</td>
    <td><img src="${dataUser.avatar}" /></td>
    <td>${dataUser.name}</td>
    <td>${dataUser.price}</td>
    <td>
      <button class="edit" onclick="handleedit(${dataUser.id})" >Edit</button>
      <button class="delete" onclick="handledelete(${dataUser.id})">Delete</button>
    </td>
  </tr>`;
  });
  table.innerHTML = datatable;
}

function search() {
  const valuesearch = document.querySelector("#search").value;
  const datasearch = [];

  dataUser.forEach((item) => {
    if (item.name.toLowerCase().includes(valuesearch.toLowerCase())) {
      datasearch.push(item);
    }
  });
  renderdata(datasearch);
}

function handledelete(id) {
  dataUser.forEach((user, index) => {
    if (user.id == id) {
      dataUser.splice(index, 1);
    }
  });
  renderdata(dataUser);
}

function handleadd() {
  const form = document.querySelector(".form");
  if (!form.style.display || form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function save() {
  const valueimage = document.querySelector("#avatar");
  const valueName = document.querySelector("#name");
  const valueprice = document.querySelector("#price");

  const newdata = {
    id: dataUser[dataUser.length - 1].id + 1,
    avatar: valueimage.value,
    name: valueName.value,
    price: valueprice.value,
  };
  dataUser.push(newdata);
  renderdata(dataUser);
}

function handleedit(id) {
  const id1 = document.querySelector("#id");
  const name1 = document.querySelector("#name1");
  const price1 = document.querySelector("#price1");
  const formedit = document.querySelector(".formedit");
  if (!formedit.style.display || formedit.style.display === "none") {
    formedit.style.display = "block";
  } else {
    formedit.style.display = "none";
  }

  dataUser.forEach((user) => {
    console.log(user);
    if (user.id == id) {
      id1.value = user.id;
      name1.value = user.name;
      price1.value = user.price;
      document.querySelector("#id").readOnly = true;
    }
  });
}

function save1() {
  dataUser.forEach((user) => {
    if (user.id == document.querySelector("#id").value) {
      user.name = document.querySelector("#name1").value;
      user.price = document.querySelector("#price1").value;
    }
  });
  renderdata(dataUser);
}
