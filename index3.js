$(".menu-icon").click(function () {
    $("nav.navs").toggleClass('active')
});

$("nav.navs").click(function () {
    $(this).removeClass('active')
});

$(".payment-dl dt").click(function () {
    $(".payment-dl dt").removeClass('checked')
    $(this).addClass('checked');
});

$(".up-slide-dwn").click(function () {
    $is_close = $(this).hasClass('active');
    var time = 400;
    var _contentDom = $(this).find('.acdn-content');
    if ($is_close) {
        $(this).removeClass('active');
    } else {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var height = $(this).find('.acdn-content').height();
        _contentDom.height(0).animate({height: height + 30}, time);
    }
});
$("img.lazyload").lazyload({
    placeholder: '/static/img/spacer.png',
    effect: "fadeIn",
    threshold: 100
});

if (typeof ga4_id != 'undefined' && ga4_id) {
    gtag("event", "view_news", {
        send_to: ga4_id
    })
    $('body .order-now').on('click', function () {
        gtag('event', 'click_news_order', {
            send_to: ga4_id
        });
    });
}