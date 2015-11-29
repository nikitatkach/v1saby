$(document).ready(function () {


    // tabs switch
    $('.tabs-list').find(".item").eq(0).addClass("selected");
    $('.tab-item').hide().eq(0).show();

    $('.tabs-list .item').click(function () {
        $('.tab-item').hide();
        $('.tabs-list .item').removeClass("selected");
        $(this).addClass("selected");
        var tabData = $(this).attr("data-tab");
        $('#tab-' + tabData).show();
    });



    // hide/show sidebar
    $(".sidebar .close").click(function () {
        $(".page").removeClass("sidebar-show");
    });



    $('.phone-mask').mask("999-99-99-99");
    $('.user-phone').mask("+375(999)-99-99-99");



    $(".visa-item .more-icon").click(function () {
        $(this).toggleClass("active");
        $(this).parent().find(".full-description").slideToggle("slow");
    });



    // hide/show popup
    $('.popup-open').click(function () {
        var popupData = $(this).attr("data-popup");
        $('.popup-overlay').show();
        var popup = $('#popup-' + popupData).show();

        var marginLeft = -popup.outerWidth() / 2,
            marginTop = -popup.outerHeight() / 2;
        popup.css({
            "margin-left": marginLeft,
            "margin-top": marginTop
        });
    });

    $('.popup-close').click(function () {
        $('.popup-overlay').hide();
        $('.popup').hide();
    });
});