/**
 * Created by Matthew Denton on 1/01/18
 */
$("[data-scrollto]").on('click', function () {
    var toFind = $(this).attr('data-scrollto');
    var to = $(toFind);
    if (to.length === 0) return;
    var fromTop = to.offset().top;
    var nav = $("#nav-bar");
    $("html, body").animate({
        scrollTop: (fromTop - nav.height())
    }, 700);
});