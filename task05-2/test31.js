function qiwei() {
    var a=parseFloat(document.getElementById("text").value);
    var b=parseFloat(document.getElementById("text2").value);
    if(isNaN(a)){
        alert('输入正确x');
        return;
    }
    if(isNaN(b)){
        alert('输入正确y');
        return;
    }
    var c=document.getElementById("text1").value;
    var d;
    switch (c){
        case '-':d=a-b;break;
        case '+':d=a+b;break;
        case '*':d=a*b;break;
        case '/':d=a/b;break;
        default:alert("输入正确的运算符");
            return;break;
    }
    var p=document.getElementById('pid');
    p.innerHTML="计算结果为"+d;
}


