/**
 * Created by Matthew Denton on 1/01/18
 */
$(document).on('scroll', function () {
    var y = window.scrollY;
    var windowHeight = window.innerHeight;
    var yb = y + windowHeight;

    $(".container").each(function () {
        var container = $(this);
        var content = container.find('.content');
        var height = container.height() - 400;
        var top = container.offset().top + 200;
        var bottom = top + height;
        if ((top >= y && top < yb && bottom > y) || (bottom > y && bottom < yb)) {
            content.addClass('show');
        } else {
            content.removeClass('show');
        }
    });
});