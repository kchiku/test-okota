//マウスアイコンクリック

$(function(){
    $('.js-acc-button').on('click', function () {
        $(this).toggleClass('open');
        $(this).find('.js-acc-content').slideToggle(300);
    });
});
