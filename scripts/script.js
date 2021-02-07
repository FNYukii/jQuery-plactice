$(function(){

  
  // select previus img
  $('#green-left').click(function(){
    let $greenImg = $('.green-img');
    let greenIndex = $('.img').index($greenImg);
    $greenImg.removeClass('green-img');
    if(greenIndex != 0){
      $greenImg.prev().addClass('green-img');
    }else{
      $('.img').eq($('.img').length - 1).addClass('green-img');
    }
  });

  // select next img
  $('#green-right').click(function(){
    let $greenImg = $('.green-img');
    let greenIndex = $('.img').index($greenImg);
    $greenImg.removeClass('green-img');
    if(greenIndex != $('.img').length -1){
      $greenImg.next().addClass('green-img');
    }else{
      $('.img').eq(0).addClass('green-img');
    }
  });

  // select clicked img
  $('.img').click(function(){
    $('.img').removeClass('green-img');
    $(this).addClass('green-img');
  });

  // add a img
  $('#add-img').click(function(){
    $('.images').append("<div class='img'>" + $(".img").length + "</div>");
  });

  
  // switch between fadein and fadeout
  $('#green-fade-toggle').click(function(){
    $('.green-img').fadeToggle();
  });
  
  // switch between slidedown and slideup
  $('#green-slide-toggle').click(function(){
    $('.green-img').slideToggle();
  });


  // switch border-radius
  let isGreenSquare = true;
  $('#green-radius-toggle').click(function(){
    if(isGreenSquare){
      $('.green-img').animate({
        'border-radius':'50%'
      }, 500);
      $(this).html('<i class="far fa-circle"></i>');
      isGreenSquare = false;
    }else{
      $('.green-img').animate({
        'border-radius':'0%'
      }, 500);
      $(this).html('<i class="far fa-square"></i>');
      isGreenSquare = true;
    }
  });


});