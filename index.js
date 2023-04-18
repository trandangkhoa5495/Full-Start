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
function show1() {
  const pass1 = document.querySelector("#Repeatpass");

  const faeye1 = document.querySelector("#fa-eye");
  const faeyeslash1 = document.querySelector("#fa-eye-slash");

  if (pass1.type == "password") {
    pass1.type = "text";
    faeye1.style.display = "inline";
    faeyeslash1.style.display = "none";
  } else {
    pass1.type = "password";
    faeyeslash1.style.display = "inline";
    faeye1.style.display = "none";
  }
}


const form = document.querySelector(".pass");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pass").value;
  const repeatpass = document.querySelector("#Repeatpass").value;
  const username = document.querySelector("#username").value;
  const addrest = document.querySelector("#address").value;

  const newdataUser = {
    email: email,
    password: password,
    repeatPassword: repeatpass,
    userName: username,
    address: addrest,
  };
  validator(newdataUser);

  const erroremail = document.querySelector("#erroremail");
  const errorpassword = document.querySelector("#errorpassword");
  const errorepeatpassword = document.querySelector("#errorepeatpassword");
  const errorusername = document.querySelector("#errorusername");
  const erroraddress = document.querySelector("#erroraddress");

  const checkvalidator = validator(newdataUser);
  if (checkvalidator.iserror) {
    erroremail.innerHTML = checkvalidator.erroremail1;
    errorpassword.innerHTML = checkvalidator.errorpassword1;
    errorepeatpassword.innerHTML = checkvalidator.errorrepeatpassword1;
    errorusername.innerHTML = checkvalidator.errorusername1;
    erroraddress.innerHTML = checkvalidator.erroraddress1;
  } else {
    erroremail.innerHTML = "";
    errorpassword.innerHTML = "";
    errorepeatpassword.innerHTML = "";
    errorusername.innerHTML = "";
    erroraddress.innerHTML = "";
  }
});

const regxEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validator(data) {
  let error = {
    iserror: false,
    erroremail1: "",
    errorpassword1: "",
    errorrepeatpassword1: "",
    errorusername1: "",
    erroraddress1: "",
  };
  if (!data.email) {
    error.iserror = true;
    error.erroremail1 = "Email không được để trống";
  }
  if (!data.email.match(regxEmail)) {
    error.iserror = true;
    error.erroremail1 = "Email không đúng định dạng, vui lòng nhập lại";
  }
  if (!data.password) {
    error.iserror = true;
    error.errorpassword1 = "Password không được để trống";
  }
  if (!data.repeatPassword) {
    error.iserror = true;
    error.errorrepeatpassword1 = "repeat password không được để trống";
  }
  if (data.password !== data.repeatPassword) {
    error.iserror = true;
    error.errorrepeatpassword1 = "password không trùng khớp";
  }
  if (!data.userName) {
    error.iserror = true;
    error.errorusername1 = "User Name không được để trống";
  }
  if (!data.address) {
    error.iserror = true;
    error.erroraddress1 = "Address không được để trống";
  }
  return error;
}

// tạo function lấy dữ liệu người dùng

