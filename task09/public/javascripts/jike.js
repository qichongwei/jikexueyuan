$(window).ready(function () {
    qiwei();
    houtai();
});
function qiwei() {
    $('.tuijian').click(function () {
         $.ajax({
               type: "GET",
               url: "http://localhost:3900/1",
               dataType:'json',
               success:function (msg) {
                  $('.index-list-item').each(function (value) {
                      if(value>=5){
                          $(this).css('display','none');
                      }
                  });
                    $(".index-list-image").each(function (value) {
                        $(this).attr('src',msg[value].newsimg);
                    });
                   $('.indexp').each(function (value) {
                       $(this).text(msg[value].newstitle);
                   });
                   $('.index-list-main-abs').each(function (value) {
                           $(this).text(msg[value].newscontent);
                       });
                   $('.tip-time').each(function (value) {
                       $(this).text(msg[value].newstime);
                   });
               }
           });
           $('.nava').each(function () {
               $(this).removeClass('aclick');
           });
           $('.nava').eq(0).addClass('aclick');
       });
    $('.baijia').click(function () {
            $.ajax({
                type: "GET",
                url: "http://localhost:3900/2",
                dataType:'json',
                success:function (msg) {
                    $('.index-list-item').each(function (value) {
                        if(value>=5){
                            $(this).css('display','none');
                        }
                    });
                    $(".index-list-image").each(function (value) {
                        $(this).attr('src',msg[value].newsimg);
                    });
                    $('.indexp').each(function (value) {
                        $(this).text(msg[value].newstitle);
                    });
                    $('.index-list-main-abs').each(function (value) {
                        $(this).text(msg[value].newscontent);
                    });
                    $('.tip-time').each(function (value) {
                        $(this).text(msg[value].newstime);
                    });
                }
                });
            $('.nava').each(function () {$(this).removeClass('aclick');});
            $('.nava').eq(1).addClass('aclick');
        });
    $('.local').click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:3900/3",
            dataType:'json',
            success:function (msg) {
                $('.index-list-item').each(function (value) {
                    if(value>=5){
                        $(this).css('display','none');
                    }
                });
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(2).addClass('aclick');
    });
    $('.pic').click(function () {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3900/4",
            dataType:'json',
            success:function (msg) {
                $('.index-list-item').each(function (value) {
                    if(value>=5){
                        $(this).css('display','none');
                    }
                });
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(3).addClass('aclick');
    });
    $('.shehui').click(function () {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3900/5",
            dataType:'json',
            success:function (msg) {
                $('.index-list-item').each(function (value) {
                    if(value>=5){
                        $(this).css('display','none');
                    }
                });
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(5).addClass('aclick');
    });
    $('.yule').click(function () {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3900/6",
            dataType:'json',
            success:function (msg) {
                $('.index-list-item').each(function (value) {
                    if(value>=5){
                        $(this).css('display','none');
                    }
                });
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(4).addClass('aclick');
    });
}

function houtai() {
    $('#zeng').click(function () {
           $('.right').css('display','block');
        $('.right2').css('display','none');
        $('.right3').css('display','none');
        $('.right4').css('display','none');
    });
    $('#shan').click(function () {
        $('.right2').css('display','block');
        $('.right').css('display','none');
        $('.right3').css('display','none');
        $('.right4').css('display','none');
    });
    $('#gai').click(function () {
        $('.right3').css('display','block');
        $('.right2').css('display','none');
        $('.right').css('display','none');
        $('.right4').css('display','none');
    });
    $('#cha').click(function () {
        $('.right4').css('display','block');
        $('.right2').css('display','none');
        $('.right3').css('display','none');
        $('.right').css('display','none');
    });
}











