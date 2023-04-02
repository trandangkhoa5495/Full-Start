const userName=prompt("Who's there");

if (userName=="Admin") {
    alert("please password");
} else if (userName==null) {
    alert("Canceled");
} else { alert("I don't know you")};

const pass=prompt("Password")

if (pass=="TheMaster") {
    alert("Wellcome");
} else if (pass=="null") {
    alert("Canceled");
} else {alert("Wrong password");}