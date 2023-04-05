function fibo() {
    let n1=1;
    let n2=0;
    let fibo ="";
    for (let i=1;i<=20;i++) {
        console.log(fibo)
        fibo= n1 + n2;
        n1=n2;
        n2=fibo;
    }
}

function fibonanci(){
    let n1=1;
    let n2=0;
    let fibo ="";
    for (let i=1;i<=20;i++) {
        fibo= n1 + n2;
        n1=n2;
        n2=fibo;
        if (fibo % 5 ==0) {
            console.log(fibo);
            break;
    } 
}
}

function fibonanci1(){
    let n1=1;
    let n2=0;
    let fibo ;
    let total=0;
    for (let i=1;i<=20;i++) {
        console.log(fibo)
        fibo= n1 + n2;
        n1=n2;
        n2=fibo;
        total = total + fibo;
    } console.log(total);
}

function fizz() {
    for (let i=1;i<=100;i++) {
    if (i % 3 == 0) {
        if (i % 5 ==0) {
            console.log ("fizbull");
        }else { console.log ("fizz");}

    } else if (i % 5 == 0) {
        console.log ("buzz");
    } else (console.log(i));
}
}

function math() {
    const N = Number(prompt("nhập số từ 0 đến 10"));
    const M = Math.floor(Math.random() * 11);

    if (N == M) {
        alert("bạn đã đoán đúng");
    } else {alert("bạn đã đoán sai");}
}