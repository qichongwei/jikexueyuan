// 代码重写采用了工厂设计模式，
// 工厂模式的优点在于防止代码重写，能优化结构便于维护。
// 代码更加简单易读，节省代码编写量。


$(document).ready(function() {
    qiWei();
    huanFu();
    close();
    color();
    hover();
    xianshi();
    morepro();
    nav();
    context();
    minSearch();
    fanhui();
});

function mouseOver() {
    setTimeout(function() {
        $('.h-aid').css('display', "block");
    }, 1000);

}


var o=new Object();
o.sty=function (cla,value) {
        $(cla).css('display', value);
}
o.sty1=function (cla,clb) {
    $(document.body).css({
        'background': cla,
        'backgroundSize': '100% auto'
    });
    $('#img').attr('src', clb);
}
o.sty2=function (cla) {
    $(this).removeClass(cla);
}
o.sty3=function (cla) {
    $(this).addClass(cla);
}

function mouseOut() {
    // $('.h-aid').css('display', "none");
    o.sty('.h-aid','none');
}
/*皮肤切换函数*/
function huanFu() {
    $('#huanfu').click(function() {
        // $('.huanfuye').css('display', 'block');
        o.sty('.huanfuye','block');
    })
}

function qiWei() {
    $('#h-aid').mouseenter(mouseOver);
    $('#h-aid').mouseleave(mouseOut);
}

function close() {
    $('.close').click(
        function() {
            // $('.huanfuye').css('display', 'none');
            o.sty('.huanfuye','none');
        }
    )
}

function color() {
    $(".huanfuColor:eq(0)").click(function() {
        // $(document.body).css({
        //     'background': 'url(10.jpg) no-repeat',
        //     'backgroundSize': '100% auto'
        // });
        // $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
        o.sty1('url(10.jpg) no-repeat','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
    $(".huanfuColor:eq(1)").click(function() {
        // $(document.body).css({
        //     'background': 'url(11.jpg) no-repeat',
        //     'backgroundSize': '100% auto'
        // });
        // $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
        o.sty1('url(11.jpg) no-repeat','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
    $(".huanfuColor:eq(2)").click(function() {
        // $(document.body).css({
        //     'background': 'url(12.jpg) no-repeat',
        //     'backgroundSize': '100% auto'
        // });
        // $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
        o.sty1('url(12.jpg) no-repeat','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
    $(".huanfuColor:eq(3)").click(function() {
        // $(document.body).css({
        //     'background': 'url(13.jpg) no-repeat',
        //     'backgroundSize': '100% auto'
        // });
        // $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
        o.sty1('url(13.jpg) no-repeat','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
}

function hover() {
    $('.yonghu').mouseover(function() {
        // $('.xiaright').css('display', 'block');
        o.sty('.xiaright','block');
    })
    $('.shezhi').mouseover(function() {
        // $('.xialeft').css('display', 'block');
        o.sty('.xiaright','block');
    })
}
/*下拉框函数*/
function xianshi() {
    $('.xiaright').hover(function() {
        // $(this).css('display', 'block');
        o.sty('.xiaright','block');
    }, function() {
        // $(this).css('display', 'none');
        o.sty('.xiaright','none');
    });
    $('.xialeft').hover(function() {
        // $(this).css('display', 'block');
        o.sty('.xialeft','block');
    }, function() {
        // $(this).css('display', 'none');
        o.sty('.xialeft','none');
    });
}
/*更多产品函数*/
function morepro() {
    $('#more').mouseenter(function() {
        // $('.pro').css('display', 'block');
        o.sty('.pro','block');
    });
    $('.pro').hover(function() {
        // $(this).css('display', 'block');
        o.sty('.pro','block');
    }, function() {
        o.sty('.pro','none');
    });
}

function nav() {
    $('.nav1').click(function() {
        $('.nav').each(function() {
            // $(this).removeClass('dianji');
            o.sty2('dianji');
        });
        // $(this).addClass('dianji');
        o.sty3('dianji');
    });
    $('.nav:eq(0)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            // $(this).removeClass('dianji');
            o.sty2('dianji');
        });
        // $(this).addClass('dianji');
        o.sty3('dianji');
    });
    $('.nav:eq(1)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            // $(this).removeClass('dianji');
            o.sty2('dianji');
        });
        // $(this).addClass('dianji');
        o.sty3('dianji');
    });
    $('.nav:eq(2)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            // $(this).removeClass('dianji');
            o.sty2('dianji');
        });
        // $(this).addClass('dianji');
        o.sty3('dianji');
    });
    $('.nav:eq(3)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            // $(this).removeClass('dianji');
            o.sty2('dianji');
        });
        // $(this).addClass('dianji');
        o.sty3('dianji');
    });
}

function context() {
    $('.nav1').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        // $('.context6:eq(0)').css('display', 'block');
        o.sty('.context6:eq(0)','block');
    });
    $('.nav:eq(0)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        // $('.context6:eq(1)').css('display', 'block');
        o.sty('.context6:eq(1)','block');
    });
    $('.nav:eq(1)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        // $('.context6:eq(2)').css('display', 'block');
        o.sty('.context6:eq(2)','block');
    });
    $('.nav:eq(2)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        // $('.context6:eq(3)').css('display', 'block');
        o.sty('.context6:eq(3)','block');
    });
    $('.nav:eq(3)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        // $('.context6:eq(4)').css('display', 'block');
        o.sty('.context6:eq(4)','block');
    });
}

function minSearch() {
    $(window).scroll(function() {
        var height = $(document).scrollTop();
        if (height > 148) {
            // $('.minSearch').css('display', 'block');
            o.sty('.minSearch','block');
        } else {
            // $('.minSearch').css('display', 'none');
            o.sty('.minSearch','none');
        }
    });
}

function fanhui() {
    $(window).scroll(function() {
        var height = $(document).scrollTop();
        if (height > 10) {
            // $('.fanhui').css('display', 'block');
            o.sty('.fanhui','block');
        } else {
            // $('.fanhui').css('display', 'none');
            o.sty('.fanhui','none');
        }
    });
    $('.fanhui').hover(function() {
        $('.fanhui div').eq(0).css('display', 'block');
        $('.fanhui div').eq(1).css('display', 'none');
    }, function() {
        $('.fanhui div').eq(1).css('display', 'block');
        $('.fanhui div').eq(0).css('display', 'none');
    });
}
