$(window).ready(function () {
qiwei();
});
function qiwei() {
    $('.question').each(function (value) {
        var a;
        $(this).click(function () {
            if(a==0){
                $('.answer').eq(value).css('display','none');
                a=1;
            }
            else{
                $('.answer').eq(value).css('display','block');
                a=0;
            }

        });
    });
    $('h2').each(function (value) {
        var a;
        $(this).click(function () {
            if(a==0){
                $('.text').eq(value).css('display','none');
                a=1;
            }
            else{
                $('.text').eq(value).css('display','block');
                a=0;
            }

        });
    });


}











