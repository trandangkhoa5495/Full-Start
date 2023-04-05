function setup() {
    for (i=1;i<=100;i++) {
        if (i==99) {
            alert("Đã hoàn thành.")
        }
    }
}

function temperature() {
    let tem= +prompt("nhập nhiệt độ:");
        if (tem>100) {
            alert("Giảm nhiệt độ");
        } else if (tem<20) {
            alert("tăng nhiệt độ");
        } else {("vui lòng nhập nhiệt độ");}
}

function temperature1() {
    let tem;
    do {tem= +prompt("nhập nhiệt độ:");
    if (tem>100) {
        alert("Giảm nhiệt độ");
    } else if (tem<20) {
        alert("tăng nhiệt độ");
    } else {(alert("nhiệt độ ổn định"));}       
}   while (tem<20 || tem>100);
} 