const dataUser = [
  {
    id: 1,
    img: "ca1.png",
    name: "BMW X3",
    engine: "xăng",
    price: "1799000",
  },
  {
    id: 2,
    img: "ca2.png",
    name: "BMW X4",
    engine: "xăng",
    price: "1799000",
  },
  {
    id: 3,
    img: "ca3.png",
    name: "BMW X5",
    engine: "xăng",
    price: "1799000",
  },
  {
    id: 4,
    img: "ca4.png",
    name: "BMW X6",
    engine: "xăng",
    price: "1799000",
  },
  {
    id: 5,
    img: "ca5.png",
    name: "BMW X7",
    engine: "xăng",
    price: "1799000",
  },
];

//  render dữ liệu 

renderdata(dataUser);

function renderdata(data) {
  const product = document.querySelector(".product");
  let dataproduct = "";
  data.forEach((dataUser, id) => {
    dataproduct += `<div class="product1">
        <div id="picture">
        <img src="${dataUser.img}" />
        </div>
        <p>No: ${dataUser.id}</p>
        <p> Name: ${dataUser.name}</p>
        <p> Engine: ${dataUser.engine}</p>
        <p> Price: ${dataUser.price}</p>
        <button onclick="handleedit(${dataUser.id})">Edit</button>
        <button onclick="handledelete(${dataUser.id})">Delete</button>
    </div>`;
  });
  product.innerHTML = dataproduct;
}

//  chức năng search 

function search() {
  const search = document.querySelector("#search");
  if (!search.style.display || search.style.display == "none") {
    search.style.display = "block";
  } else {
    search.style.display = "none";
  }

  const valuesearch = document.querySelector("#search").value;
  const datasearch = [];

  dataUser.forEach((item) => {
    if (item.name.toLowerCase().includes(valuesearch.toLowerCase())) {
      datasearch.push(item);
    }
  });
  renderdata(datasearch);
}


//  chức năng delete


function handledelete(id) {
  dataUser.forEach((user, index) => {
    if (user.id == id) {
      dataUser.splice(index, 1);
    }
  });
  renderdata(dataUser);
}


//  chức năng ADD


function addnewproduct() {
  const addnewproduct = document.querySelector(".form");
  if (!addnewproduct.style.display || addnewproduct.style.display == "none") {
    addnewproduct.style.display = "block";
  } else {
    addnewproduct.style.display = "none";
  }
}

function save() {
  const newavatar = document.querySelector("#avatar");
  const newname = document.querySelector("#name");
  const newengine = document.querySelector("#engine");
  const newprice = document.querySelector("#price");

  const newdata = {
    id: dataUser[dataUser.length - 1].id + 1,
    img: newavatar.value,
    name: newname.value,
    engine: newengine.value,
    price: newprice.value,
  };
  dataUser.push(newdata);
  renderdata(dataUser);
}

// chức năng edit


function handleedit(id) {
  const handleedit = document.querySelector(".form1");
  if (!handleedit.style.display || handleedit.style.display == "none") {
    handleedit.style.display = "block";
  } else {
    handleedit.style.display = "none";
  }

  const id1 = document.querySelector("#id1");
  const name1 = document.querySelector("#name1");
  const engine1 = document.querySelector("#engine1");
  const price1 = document.querySelector("#price1");

  dataUser.forEach((user) => {
    if (user.id == id) {
      console.log(user);
      id1.value = user.id;
      name1.value = user.name;
      engine1.value = user.engine;
      price1.value = user.price;
    }
  });
}

function save1() {
  dataUser.forEach((user) => {
    if (user.id == document.querySelector("#id1").value) {
      user.name = document.querySelector("#name1").value;
      user.engine = document.querySelector("#engine1").value;
      user.price = document.querySelector("#price1").value;
    }
  });
  renderdata(dataUser);
}
