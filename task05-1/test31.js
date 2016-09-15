function qiwei() {
    var a = parseInt(document.getElementById('text').value);
    var c;
    if (isNaN(a)) {
        alert('输入正确格式');
        c = "错误";
    }
    if (a < 0) {
        alert('输入错误');
        c = "错误";
    }
    if (a > 100) {
        alert('输入错误');
        c = "错误";
    }
    if (a <= 100 && a >= 90) {
        c = "一等生";
    }
    if (a < 90 && a >= 80) {
        c = "二等生";
    }
    if (a < 80 && a >= 70) {
        c = "三等生";
    }
    if (a < 70 && a >= 60) {
        c = "四等生";
    }
    if (a < 60 && a >= 50) {
        c = "五等生";
    }
    if (a < 50 && a >= 40) {
        c = "六等生";
    }
    if (a < 40 && a >= 30) {
        c = "七等生";
    }
    if (a < 30 && a >= 20) {
        c = "八等生";
    }
    if (a < 20 && a >= 10) {
        c = "九等生";
    }
    if (a < 10 && a >= 0) {
        c = "十等生"
    }

    var d = document.getElementById('pid');
    d.innerHTML = "你的成绩是" + c;
}
