function show() {
  const pass = document.querySelector("#pass");

  const faeye = document.querySelector(".fa-eye");
  const faeyeslash = document.querySelector(".fa-eye-slash");

  if (pass.type == "password") {
    pass.type = "text";
    faeye.style.display = "inline";
    faeyeslash.style.display = "none";
  } else {
    pass.type = "password";
    faeyeslash.style.display = "inline";
    faeye.style.display = "none";
  }
}

function menu() {
  const img = document.querySelector(".logo");
  const menu = document.querySelector(".navi ul");
  if (!menu.style.display || menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  if (!img.style.display || img.style.display == "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

window.addEventListener("resize", () => {
  const menu = document.querySelector(".navi ul");
  const img = document.querySelector(".logo");
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
    img.style.display = "block";
  } else {
    if (window.innerWidth > 600) {
      img.style.display = "none";
    } else {
      menu.style.display = "none";
    }
  }
});

const form = document.querySelector(".pass");
const users = [
  {
    user: "phucdeptrai",
    password: "daconguoiyeu",
    email: "daconguoiyeu@gmail.com",
  },
  {
    user: "phucdeptrai1",
    password: "daconguoiyeu1",
    email: "daconguoiyeu@gmail1.com",
  },
  {
    user: "phucdeptrai2",
    password: "daconguoiyeu2",
    email: "daconguoiyeu@gmail2.com",
  },
  {
    user: "phucdeptrai3",
    password: "daconguoiyeu3",
    email: "daconguoiyeu@gmail3.com",
  },
  {
    user: "phucdeptrai4",
    password: "daconguoiyeu4",
    email: "daconguoiyeu@gmail4.com",
  },
];


// bài giải cơ bản

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user1 = document.querySelector("#username").value;
  const password1 = document.querySelector("#pass").value;
  const email1 = document.querySelector("#email").value;
  let isloggin = false;

  users.forEach((user, index) => {
    console.log(user);
    if (user1 == user.user && password1 == user.password) {
      isloggin = true;
      return;
    }
  });
  if (isloggin) {
    alert("đã đăng nhập thành công");
  } else {
    alert("đăng nhập thất bại");
  }
});




//  bài giảng nâng cao


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user1 = document.querySelector("#username").value;
  const password1 = document.querySelector("#pass").value;
  const email1 = document.querySelector("#email").value;

}) 
  
