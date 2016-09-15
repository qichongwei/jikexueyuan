var a = document.getElementById('red');
var b = document.getElementById('green');
var c = document.getElementById('green1');
var d = document.getElementById('blue');
var e = document.getElementById('nav');
var f = document.getElementsByTagName('a');
/*确认上次修改的样式，再次载入*/
window.onload = function() {
    var valueLocal = localStorage.getItem("g");
    switch (valueLocal) {
        case '1':
            qiWei();
            break;
        case '2':
            qiWei1();
            break;
        case '3':
            qiWei2();
            break;
        case '4':
            qiWei3();
            break;
    }
};
/*点击变色函数*/
function qiWei2() {
    var g = localStorage.setItem("g", "3");
    e.style.backgroundColor = '#00ff00';
    for (var i = 15; i < f.length; i++) {
        f[i].style.color = '#00ff00';
    }
}

function qiWei() {
    var g = localStorage.setItem("g", "1");
    e.style.backgroundColor = 'red';
    for (var i = 15; i < f.length; i++) {
        f[i].style.color = 'red';
    }
}

function qiWei1() {
    var g = localStorage.setItem("g", "2");
    e.style.backgroundColor = 'green';
    for (var i = 15; i < f.length; i++) {
        f[i].style.color = 'green';
    }
}

function qiWei3() {
    var g = localStorage.setItem("g", "4");
    e.style.backgroundColor = 'blue';
    for (var i = 15; i < f.length; i++) {
        f[i].style.color = 'blue';
    }
}
/*点击事件绑定*/
a.addEventListener('click', qiWei);
b.addEventListener('click', qiWei1);
c.addEventListener('click', qiWei2);
d.addEventListener('click', qiWei3);
