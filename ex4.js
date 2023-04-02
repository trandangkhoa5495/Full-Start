switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}


let a = prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}


function nunber(){
    const number = Number(prompt("nhập số vào:"));

    if (number>0) {
        alert("1");
    } else if (number<0) {
        alert("-1");
    } else { alert ("0");}
}


function mumber(){
    const mumber = Number(prompt("nhập số vào:"));
    switch (mumber){
        case mumber>0:
            alert(1);
            break;
        case mumber<0:
            alert(-1);
            break;
        default:
            alert(0);
    }
}
