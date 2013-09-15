
/* --- CREATE FIXED HEADER ---*/

function checkHeader(){
    var $header = $('header');

    scrollPos = $(window).scrollTop();

    if(scrollPos > 0){
        $header.addClass('fixed');
    } else {
        $header.removeClass('fixed');
    };
};

/* ====== ON SCROLL ======  */

$(window).scroll(function(){
    checkHeader();
});
