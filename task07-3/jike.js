// 网页打开时，动态加载src
$(document).ready(function() {
    $('.img1').attr('src', function(n) {
        return n + '.jpg';
    });
    $(window).on('load', function() {
        img();
        var dataImg = {
            'data': [
                { 'src': '1.jpg' }, { 'src': '2.jpg' }, { 'src': '3.jpg' }, { 'src': '4.jpg' }, { 'src': '5.jpg' }, { 'src': '6.jpg' }, { 'src': '7.jpg' }, { 'src': '8.jpg' }, { 'src': '9.jpg' }
            ]
        }
        window.onscroll = function() {
            if (scroll()) {
                // 动态添加图片
                $.each(dataImg.data, function(index, value) {
                    var box = $('<div>').addClass('img').appendTo($('#container'));
                    var img = $("<img>").addClass('img1').appendTo(box);
                    img.attr('src', $(this).attr('src')).appendTo(box);
                })
                img();
            }
        }
    });
});
// 判断是否到达底部
function scroll() {
    var box = $('.img');
    var lastHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastHeight < documentHeight + scrollHeight) ? true : false;
}

function img() {
    // 求屏幕一行图片数
    var num = Math.floor($(window).innerWidth() / $('.img').outerWidth());
    var box = $('.img');
    boxArr = [];
    // 遍历div

    box.each(function(index, value) {
        var boxHeight = box.eq(index).outerHeight();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            // 求最小高度及位置
            var minHeight = Math.min.apply(null, boxArr);
            var minBoxIndex = $.inArray(minHeight, boxArr);
            $(this).css({
                'position': "absolute",
                'top': minHeight,
                'left': box.eq(minBoxIndex).position().left
            })
            boxArr[minBoxIndex] += box.eq(index).outerHeight();
        }
    });
}
