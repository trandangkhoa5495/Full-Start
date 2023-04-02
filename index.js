function caculatorradius(){
    const r = Number(prompt("nhập bán kính đường tròn"))
if (r>0) {
     const s = 3.14*r*r;
     console.log("Diện tích hình tròn",s);
}
}

function evenoldd(){
    const number = Number(prompt("nhập số"))
    const isven = number%2==0;
    
    console.log("check is even", isven)

 if (isven){
    alert(" số "+ number + " là số chẳn")
 }
 else {
    alert(" số "+ number + " là số lẻ")
 }
}

// bài 3
function buyproduct(){
const product = prompt("bạn muốn mua sản phẩm gì?,Điện thoại,Máy tính,Máy tính bảng");

const mobile = "Điện thoại"
const laptop = "Máy tính"
const taplet = "Máy tính bảng"
const nothing = "chúng tôi không có sản phẩm này"

const DELL = "DELL"
const HP = "HP"

const APLLE = "APLLE"
const LG = "LG"
const SAMSUNG = "SAMSUNG"

    
if (product == mobile) {
    const brand = prompt("chúng tôi có điện thoại,'APLLE','LG','SAMSUNG'",'DELL');
    if (brand == APLLE) {
        alert ( "Đây là khu vực trung bày dòng" + mobile + "của hãng" + APLLE + "mời quý khách tham quan");
    } else if ( brand == LG) {
        alert ("Đây là khu vực trung bày dòng" + mobile + "của hãng" + LG + "mời quý khách tham quan");
    } else if (brand == SAMSUNG){
        alert ("Đây là khu vực trung bày dòng" + mobile + "của hãng" + SAMSUNG + "mời quý khách tham quan");
    } else {
        alert("chúng tôi không có sản phẩm này")
    }
} else if (product == laptop) {
    const brand = prompt("chúng tôi có laptop,'HP','DELL'");
    if (brand == DELL) {
        alert ( "Đây là khu vực trung bày dòng" + laptop + "của hãng" + DELL + "mời quý khách tham quan");
    } else if ( brand == HP) {
        alert ("Đây là khu vực trung bày dòng" + laptop + "của hãng" + HP + "mời quý khách tham quan");
    } else {
        alert("chúng tôi không có sản phẩm này")
    }
}else if (product == taplet) {
    const brand = prompt("chúng tôi có máy tính bảng,'APLLE','LG','SAMSUNG'");
    if (brand == APLLE) {
        alert ( "Đây là khu vực trung bày dòng" + taplet + "của hãng" + APLLE + "mời quý khách tham quan");
    } else if ( brand == LG) {
        alert ("Đây là khu vực trung bày dòng" + taplet + "của hãng" + LG + "mời quý khách tham quan");
    } else if (brand == SAMSUNG){
        alert ("Đây là khu vực trung bày dòng" + taplet + "của hãng" + SAMSUNG + "mời quý khách tham quan");
    } else {
        alert("chúng tôi không có sản phẩm này")
    }
}else {
    alert("không có sản phẩm")
}
}


function mounth() {
    const M = Number(prompt("nhập tháng vào đây"));
    if (M==1||M==3||M==5||M==7||M==8||M==10||M==12) { alert("31 ngày")}
    else if (M==4||M==6||M==9||M==11) {alert ("30 ngày")}
    else if (M==2) {alert("29 ngày")}
    else {alert("không hợp lệ")}
}

function checkrank() {
    const mark = Number(prompt("nhập điểm vào đây"));

}

function Electricity_bill() {
    const bill = Number(prompt("nhập chỉ số điện"))

    if (0<= bill <=50) {
        const TD = bill*1500
        alert("số tiền điện:" + TD)
    } else if ( bill <=100) {
        const tam = bill-50;
        const TD = (tam*1700)+(50*1500);
        alert("số tiền điện:" + TD)
    }else if ( bill <=200) {
        const tam = bill-100;
        const TD = (50*1500)+(50*1700)+(tam*2000);
        alert("số tiền điện:" + TD)
    }else if (bill <=300) {
        const tam = bill-200;
        const TD = (50*1500)+(50*1700)+(100*2000)+(tam*2500);
        alert("số tiền điện:" + TD)
    }else if ( bill <=400) {
        const tam = bill-300;
        const TD = (50*1500)+(50*1700)+(100*2000)+(100*2500)+(tam*2800);
        alert("số tiền điện:" + TD)
    }else if (bill >=400) {
        const tam = bill-400;
        const TD = (50*1500)+(50*1700)+(100*2000)+(100*2500)+(100*2800)+(tam*3000);
        alert("số tiền điện:" + TD)
    }else {alert("nhập số tiền khác")}
    
}

function BMI() {
    const BMI = Number(prompt("BMI của bạn là:"));
    switch (true) {
        case BMI<18.5:
            alert("cân nặng thấp (gầy)");
            break;
        case BMI >=18.5 && BMI <24.9:
            alert("bình thường");
            break;
        case BMI<25 && BMI<29.9:
            alert("tiền béo phì");
            break;
        case BMI<30 && BMI<34.9:
            alert("béo phì độ I");
            break;
        case 35>BMI && BMI<39.9:
            alert("béo phì độ II");
            break;
         case BMI>=40:
            alert("béo phì độ III");
            break;
        default:
            alert("thừa cân")
    }
}