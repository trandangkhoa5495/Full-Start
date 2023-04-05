function isprime() {
    const N = Number(prompt("Nhập số:"));
    if (N>=2) {
        let A = true;
        for (let i=2;i<N;i++) {
            if (N % i ==0) {
                isprime = false;
                break;
            }
        }
        if (A){
            alert("số đã nhập là số nguyên tố");
        } else {alert("số đã nhập không phải là số nguyên tố");}
    }else {alert("số đã nhập không phải là số nguyên tố");}
    
}




    
    

