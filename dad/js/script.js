~function() {

    $('.nav li').removeClass('active');
    $('.nav a').each(function(i,d) {
        if($(d).attr('href') == window.location.pathname) {
            $(d).parent('li').addClass('active');
        }

    });

}();
