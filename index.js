const dataUser = [
  {
    id: 1,
    image: "ava12.jpg",
    fist: "Nhàn",
    last: "Thái",
    UserName: "thaithinhan",
  },
  {
    id: 2,
    image: "ava22.png",
    fist: "Khoa",
    last: "Trần",
    UserName: "trandangkhoa",
  },
  {
    id: 3,
    image: "ava33.png",
    fist: "Tùng",
    last: "Lê",
    UserName: "letrungtung",
  },
  {
    id: 4,
    image: "ava44.png",
    fist: "Phúc",
    last: "Nguyễn",
    UserName: "nguyenphuc",
  },
  {
    id: 5,
    image: "ava55.png",
    fist: "khoa",
    last: "le",
    UserName: "leykhoa",
  },
];

renderProducts(dataUser);

function renderProducts(data) {
  const table = document.querySelector("table");
  let contentTable = `<tr>
  <th>NO</th>
  <th>Avatar</th>
  <th>Firt</th>
  <th>Last</th>
  <th>Username</th>
  <th>Action</th>
  </tr>`;
  data.forEach((dataUser, id) => {
    contentTable += `<tr>
    <td>${dataUser.id}</td>
    <td><img src="${dataUser.image}" /></td>
    <td>${dataUser.fist}</td>
    <td>${dataUser.last}</td>
    <td>${dataUser.UserName}</td>
    <td>
      <button onclick= handleedit('${dataUser.id}')>Edit</button>
      <button onclick= handledelete('${dataUser.id}')>Delete</button>
    </td>
  </tr>`;
  });
  table.innerHTML = contentTable;
}

function search() {
  const valuesearch = document.querySelector("#add").value;
  const datasearch = [];

  dataUser.forEach((item) => {
    if (
      item.fist.toLowerCase().includes(valuesearch.toLowerCase()) ||
      item.UserName.toLowerCase().includes(valuesearch.toLowerCase())
    ) {
      datasearch.push(item);
    }
  });
  renderProducts(datasearch);
}

function handledelete(id) {
  dataUser.forEach((user, index) => {
    if (user.id == id) {
      dataUser.splice(index, 1);
    }
  });
  renderProducts(dataUser);
}

function handletogle() {
  const form = document.querySelector(".form");
  // đặt điều kiện kiểm tra để ẩn /hiện form
  if (!form.style.display || form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
function save() {
  const fistName = document.querySelector("#firtname");
  const lastName = document.querySelector("#lastname");
  const userName = document.querySelector("#Username");

  const newdata = {
    id: dataUser[dataUser.length - 1].id + 1,
    fist: fistName.value,
    last: lastName.value,
    UserName: userName.value,
  };
  dataUser.push(newdata);
  renderProducts(dataUser);
}
