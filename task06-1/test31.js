var a= document.getElementById ('input');
var jf;
a.value='0';
var _num0=document.getElementById('num0');
_num0.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"){
        a.value='0';
    }
    else{
        a.value=a.value+"0";
    }
}
var _num1=document.getElementById('num1');
_num1.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='1';
    }
    else{
        a.value=a.value+"1";
    }
}
var  _num2=document.getElementById('num2');
_num2.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='2';
    }
    else{
        a.value=a.value+"2";
    }
}
var  _num3=document.getElementById('num3');
_num3.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='3';
    }
    else{
        a.value=a.value+"3";
    }
}
var  _num4=document.getElementById('num4');
_num4.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='4';
    }
    else{
        a.value=a.value+"4";
    }
}
var  _num5=document.getElementById('num5');
_num5.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='5';
    }
    else{
        a.value=a.value+"5";
    }
}
var  _num6=document.getElementById('num6');
_num6.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='6';
    }
    else{
        a.value=a.value+"6";
    }
}
var  _num7=document.getElementById('num7');
_num7.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='7';
    }
    else{
        a.value=a.value+"7";
    }
}
var  _num8=document.getElementById('num8');
_num8.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='8';
    }
    else{
        a.value=a.value+"8";
    }
}
var  _num9=document.getElementById('num9');
_num9.onclick=function () {
    if(a.value.length>10){
        return;
    }
    if(a.value=="0"||a.value=='-0'){
        a.value='9';
    }
    else{
        a.value=a.value+"9";
    }
}
var  _num10=document.getElementById('dian');
_num10.onclick=function () {
    var sa=1;
    for( var i=0;i<a.value.length;i++){
        if(a.value[i]=='.'){
            return sa=0;
        }
    }
    if(sa){
        a.value=a.value+".";
    }
}
var _fushu=document.getElementById('fushu');
_fushu.onclick=function () {
    if(a.value[0]=='-'){
a.value=a.value.slice(1,a.value.length);
    }
    else{
      s1='-';
        a.value=s1.concat(a.value);
    }
}
var _daoshu=document.getElementById('daoshu');
_daoshu.onclick=function () {
    if(a.value=='0'||a.value=='0.'){
        alert('除数不能为0');
        return;
    }
    else{
        var chushu=parseFloat(a.value);
        var shang=1/chushu;
        a.value=shang;
    }
}
var _tuige=document.getElementById('tuige');
_tuige.onclick=function () {
    if(a.value=='0'){
        return;
    }

    else{
        if(a.value.length==1){
           a.value='0';
        }
        else{a.value=a.value.slice(0,a.value.length-1);
    }
}
}
var _qingchu=document.getElementById('qingchu');
_qingchu.onclick=function () {
    if(a.value=='0'){
        return;
    }
    else{
        a.value='0';
    }
}
var _jiecheng=document.getElementById('jiecheng');
_jiecheng.onclick=function () {
    var chushu=parseFloat(a.value);
    if(chushu<=0){
        alert('请输入正整数');
        return;
    }
    else{
        var deshu=1;
        for(var i=0;i<chushu;chushu--){
            deshu=deshu*chushu;
        }
        a.value=deshu;
    }
}
var _log=document.getElementById('log');
_log.onclick=function () {
    var chushu=parseFloat(a.value);
    if(chushu<=0){
        alert('请输入正数');
        return;
    }
    else{
a.value=Math.log(chushu).toFixed(6);
    }
}
var _qiugen=document.getElementById('qiugen');
_qiugen.onclick=function () {
    var chushu=parseFloat(a.value);
    if(chushu<=0){
        alert('请输入正数');
        return;
    }
    else{
        a.value=Math.sqrt(chushu).toFixed(4);
    }
}
var _kaifang=document.getElementById('kaifang');
_kaifang.onclick=function () {
    var chushu=parseFloat(a.value);
  a.value=parseFloat(chushu*chushu).toFixed (4);
}
var _sin=document.getElementById('sin');
_sin.onclick=function () {
    var chushu=parseFloat(a.value);
        a.value=Math.sin(chushu).toFixed(4);
}
var _cos=document.getElementById('cos');
_cos.onclick=function () {
    var chushu=parseFloat(a.value);
    a.value=Math.cos(chushu).toFixed(4);
}
var _tan=document.getElementById('tan');
_tan.onclick=function () {
    var chushu=parseFloat(a.value);
    a.value=Math.tan(chushu).toFixed(4);
}
var _jia=document.getElementById('jia');
_jia.addEventListener('click',function () {
    var a= document.getElementById ('input');
    b=a.value;
    a.value=0;
    return b;
});
_jia.addEventListener('click',function () {
    return jf='1';
});
var _jian=document.getElementById('jian');
_jian.addEventListener('click',function () {
    var a= document.getElementById ('input');
    b=a.value;
    a.value=0;
    return b;
});
_jian.addEventListener('click',function () {
    return jf='2';
});
var _cheng=document.getElementById('cheng');
_cheng.addEventListener('click',function () {
    var a= document.getElementById ('input');
    b=a.value;
    a.value=0;
    return b;
});
_cheng.addEventListener('click',function () {
    return jf='3';
});

var _chu=document.getElementById('chu');
_chu.addEventListener('click',function () {
    var a= document.getElementById ('input');
    b=a.value;
    a.value=0;
    return b;
});
_chu.addEventListener('click',function () {
    return jf='4';
});

var _qiuyu=document.getElementById('qiuyu');
_qiuyu.addEventListener('click',function () {
    var a= document.getElementById ('input');
    b=a.value;
    a.value=0;
    return b;
});
_qiuyu.addEventListener('click',function () {
    return jf='5';
});

var _deng=document.getElementById('deng');
function  jiafa() {
    var sum=parseFloat(b)+parseFloat(a.value);
    a.value=sum;
}
function  jianfa() {
    var sum=parseFloat(b)-parseFloat(a.value);
    a.value=sum;
}
function  chengfa() {
    var sum=parseFloat(b)*parseFloat(a.value);
    a.value=sum;
}
function  chufa() {
    var sum=parseFloat(b)/parseFloat(a.value);
    a.value=sum;
}
function  qiuyu() {
    var sum=parseFloat(b)%parseFloat(a.value);
    a.value=sum;
}
_deng.onclick=function () {
      var a= document.getElementById ('input');
switch (jf){
    case '1':jiafa();break;
    case '2':jianfa();break;
    case '3':chengfa();break;
    case '4':chufa();break;
    case '5':qiuyu();break;



}
}









