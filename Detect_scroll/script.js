$(function(){
    $(window).scroll(function() {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            var eTop = $('section#third').offset().top; //get the offset top of the element
            if(eTop - ($(window).scrollTop()+$(window).height()) < 0) {
                alert('I am showing!');
            }
        }, 250));
    });
});