function number() {
    let i;
    for (i=0;i<5;i++) {
        console.log("the number is:"+i);
    }   
}

function number1() {
    const N= Number(prompt("khai báo số:"));
    let total=0;
    let i;
    for(i=1;i<=N;i++) {
        total = total+i;
    } alert("total"+total);
}

// function multiplication() {
//     for(n=0;n<=10;n++){
//         if (n==1){
//             alert("bảng của chương1");
//             for (i=1;i<=10;i++) {
//                 alert(i+"*1=",+1*i)
//             }
//         }
//     }
// }

function multiplication(){
    for (i=1;i<=10;i++); {
        console.log(2*i)
    }
}