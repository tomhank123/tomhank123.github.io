$(document).on('ready', function() {
    // Direction navbar when user click navbar toggle button
    $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
        $(".navbar").removeClass("fixed-top");
    });
    $('#navbarSupportedContent').on('show.bs.collapse', function () {
        $(".navbar").addClass("fixed-top");
    });

    
    $(".btn-scroll").click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;
    }); 
});