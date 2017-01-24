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
            i = 0;
            get();
        }
    });

    $("button.submit").click(function() {
      keyword();
      i = 0;
        get();
    });

    $("button.next").click(function() {
      keyword();
        i++;
        get();
    });

    $("button.url").click(function() {
      keyword();

      var copyThis = gif;

      new Clipboard('.url', {
          text: function(trigger) {
              return copyThis;
          }
      });

      alert("URL was copied!");

    });


    // if ($(window).width() > 1024) {
    //   $('.controls').mouseenter(function() {
    //       $('.controls').addClass('blur');
    //   });
    //
    //   $('.controls').mouseleave(function() {
    //       $('.controls').removeClass('blur');
    //   });
    // }




    function keyword() {
      if ($('.inputBox').val() === "") {
        alert("Please enter a keyword!");
        location.reload();
      }
    }


});
