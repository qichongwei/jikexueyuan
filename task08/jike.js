$(window).ready(function () {
    qiwei();

});
function qiwei() {
    $('.tuijian').click(function () {
         $.ajax({
               type: "POST",
               url: "testmysql.php",
               dataType:'json',
               success:function (msg) {
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
                type: "POST",
                url: "testmysql.php",
                dataType:'json',
                success:function (msg) {
                    $(".index-list-image").each(function (value) {
                        $(this).attr('src',msg[value+5].newsimg);
                    });
                    $('.indexp').each(function (value) {
                        $(this).text(msg[value+5].newstitle);
                    });
                    $('.index-list-main-abs').each(function (value) {
                        $(this).text(msg[value+5].newscontent);
                    });
                    $('.tip-time').each(function (value) {
                        $(this).text(msg[value+5].newstime);
                    });
                }
                });
            $('.nava').each(function () {$(this).removeClass('aclick');});
            $('.nava').eq(1).addClass('aclick');
        });
    $('.local').click(function () {
        $.ajax({
            type: "POST",
            url: "testmysql.php",
            dataType:'json',
            success:function (msg) {
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value+10].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value+10].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value+10].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value+10].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(2).addClass('aclick');
    });
    $('.pic').click(function () {
        $.ajax({
            type: "POST",
            url: "testmysql.php",
            dataType:'json',
            success:function (msg) {
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value+15].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value+15].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value+15].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value+15].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(3).addClass('aclick');
    });
    $('.shehui').click(function () {
        $.ajax({
            type: "POST",
            url: "testmysql.php",
            dataType:'json',
            success:function (msg) {
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value+25].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value+25].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value+25].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value+25].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(5).addClass('aclick');
    });
    $('.yule').click(function () {
        $.ajax({
            type: "POST",
            url: "testmysql.php",
            dataType:'json',
            success:function (msg) {
                $(".index-list-image").each(function (value) {
                    $(this).attr('src',msg[value+20].newsimg);
                });
                $('.indexp').each(function (value) {
                    $(this).text(msg[value+20].newstitle);
                });
                $('.index-list-main-abs').each(function (value) {
                    $(this).text(msg[value+20].newscontent);
                });
                $('.tip-time').each(function (value) {
                    $(this).text(msg[value+20].newstime);
                });
            }
        });
        $('.nava').each(function () {$(this).removeClass('aclick');});
        $('.nava').eq(4).addClass('aclick');
    });

}













