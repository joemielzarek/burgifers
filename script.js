
$( document ).ready(function() {
  var i = 0;
  var gif = '';
  var input = $('.inputBox').val("Taco");

  get();

function get() {
  input = $('.inputBox').val();

  $.get("http://api.giphy.com/v1/gifs/search?q=bobs+burgers+'"+ input +"'&api_key=dc6zaTOxFJmzC", function(data, status){
    gif = data.data[i].images.fixed_height.url;
  });

  $('.container').css('background-image', 'url(' + gif + ')');
}


  $("button.submit").click(function(){
    get();
  });

  $("button.next").click(function(){
    i++
    get();
  });

  $("button.url").click(function(){
    alert(gif);
  });


  $('.controls').mouseenter( function() {
    $('.container').addClass('blur');
  });

  $('.controls').mouseleave( function() {
    $('.container').removeClass('blur');
  });




});
