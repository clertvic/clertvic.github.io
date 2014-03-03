
$(function(){
    init();	
});

function init(){	
    changeCoverHeight();	
};

/* --- CHANGE COVER HEIGHT ---*/

function changeCoverHeight(){
    var $cover = $('.cover.work');
    var wh = window.innerHeight;
    
    $cover.css('height',wh * .714);
};

/* --- CREATE FIXED HEADER ---*/

function checkHeader(){
    var $header = $('header');
    var scrollPos = $(window).scrollTop();

    if(scrollPos > 0){
        $header.addClass('fixed');
    } else {
        $header.removeClass('fixed');
    };
};

/* ====== EVENTS ======  */

$(window).scroll(function(){
    checkHeader();
});

$(window).resize(function(){
    changeCoverHeight();
});