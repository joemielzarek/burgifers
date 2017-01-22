$(document).ready(function() {
    var i = 0;

    function get() {
        input = $('.inputBox').val();
        $.ajax({
            type: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search?q=bobs+burgers+' + input + '&api_key=dc6zaTOxFJmzC',
            success: function(data) {
                gif = data.data[i].images.fixed_height.url;
                $('.container').css('background-image', 'url(' + gif + ')');
            }
        });
    }

    $(".inputBox").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            get();
        }
    });

    $("button.submit").click(function() {
        get();
    });

    $("button.next").click(function() {
        i++;
        get();
    });

    $("button.url").click(function() {
        alert(gif);
    });

    $('.controls').mouseenter(function() {
        $('.container').addClass('blur');
    });

    $('.controls').mouseleave(function() {
        $('.container').removeClass('blur');
    });

});
