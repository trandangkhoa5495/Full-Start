function number(){
    const A= Number(prompt("nhập số a"));
    const B= Number(prompt("nhập số b"));

    const total= A%B

    if (total==0) {
        alert("a chia hết cho b");
    } else {alert("a không chia hết cho b");}
}

function age() {
    const Age= Number(prompt("nhập số tuổi:"));

    switch (true) {
        case Age>=15:
            alert("đủ tuổi vào lớp 10");
            break;
        case Age<15:
            alert("không đủ tuổi vào lớp 10");
            break;
        default:
            alert("nhập số khác");
    }
}