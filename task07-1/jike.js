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
/*鼠标滑过函数*/
function mouseOver() {
    setTimeout(function() {
        $('.h-aid').css('display', "block");
    }, 1000);

}

function mouseOut() {
    $('.h-aid').css('display', "none");
}
/*皮肤切换函数*/
function huanFu() {
    $('#huanfu').click(function() {
        $('.huanfuye').css('display', 'block');
    })
}

function qiWei() {
    $('#h-aid').mouseenter(mouseOver);
    $('#h-aid').mouseleave(mouseOut);
}

function close() {
    $('.close').click(
        function() {
            $('.huanfuye').css('display', 'none');
        }
    )
}

function color() {
    $(".huanfuColor:eq(0)").click(function() {
        $(document.body).css({
            'background': 'url(10.jpg) no-repeat',
            'backgroundSize': '100% auto'
        });
        $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
    $(".huanfuColor:eq(1)").click(function() {
        $(document.body).css({
            'background': 'url(11.jpg) no-repeat',
            'backgroundSize': '100% auto'
        });
        $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
    $(".huanfuColor:eq(2)").click(function() {
        $(document.body).css({
            'background': 'url(12.jpg) no-repeat',
            'backgroundSize': '100% auto'
        });
        $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
    $(".huanfuColor:eq(3)").click(function() {
        $(document.body).css({
            'background': 'url(13.jpg) no-repeat',
            'backgroundSize': '100% auto'
        });
        $('#img').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
    });
}

function hover() {
    $('.yonghu').mouseover(function() {
        $('.xiaright').css('display', 'block');
    })
    $('.shezhi').mouseover(function() {
        $('.xialeft').css('display', 'block');
    })
}
/*下拉框函数*/
function xianshi() {
    $('.xiaright').hover(function() {
        $(this).css('display', 'block');
    }, function() {
        $(this).css('display', 'none');
    });
    $('.xialeft').hover(function() {
        $(this).css('display', 'block');
    }, function() {
        $(this).css('display', 'none');
    });
}
/*更多产品函数*/
function morepro() {
    $('#more').mouseenter(function() {
        $('.pro').css('display', 'block');
    });
    $('.pro').hover(function() {
        $(this).css('display', 'block');
    }, function() {
        $(this).css('display', 'none');
    });
}

function nav() {
    $('.nav1').click(function() {
        $('.nav').each(function() {
            $(this).removeClass('dianji');
        });
        $(this).addClass('dianji');

    });
    $('.nav:eq(0)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            $(this).removeClass('dianji');
        });
        $(this).addClass('dianji');
    });
    $('.nav:eq(1)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            $(this).removeClass('dianji');
        });
        $(this).addClass('dianji');
    });
    $('.nav:eq(2)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            $(this).removeClass('dianji');
        });
        $(this).addClass('dianji');
    });
    $('.nav:eq(3)').click(function() {
        $('.nav1').removeClass('dianji');
        $('.nav').each(function() {
            $(this).removeClass('dianji');
        });
        $(this).addClass('dianji');
    });
}

function context() {
    $('.nav1').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        $('.context6:eq(0)').css('display', 'block');
    });
    $('.nav:eq(0)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        $('.context6:eq(1)').css('display', 'block');
    });
    $('.nav:eq(1)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        $('.context6:eq(2)').css('display', 'block');
    });
    $('.nav:eq(2)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        $('.context6:eq(3)').css('display', 'block');
    });
    $('.nav:eq(3)').click(function() {
        $(".context6").each(function() {
            $(this).css('display', 'none');
        });
        $('.context6:eq(4)').css('display', 'block');
    });
}

function minSearch() {
    $(window).scroll(function() {
        var height = $(document).scrollTop();
        if (height > 148) {
            $('.minSearch').css('display', 'block');
        } else {
            $('.minSearch').css('display', 'none');
        }
    });
}

function fanhui() {
    $(window).scroll(function() {
        var height = $(document).scrollTop();
        if (height > 10) {
            $('.fanhui').css('display', 'block');
        } else {
            $('.fanhui').css('display', 'none');
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
