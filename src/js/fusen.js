//マウスアイコンクリック

$(function(){
    $('.js-fusen-button').on('click', function () {
        $(this).siblings('.js-fusen-item').addClass('on');
    });
});
