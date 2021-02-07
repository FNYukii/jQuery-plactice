$(function(){

  
  // change selected img
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

  $('.img').click(function(){
    $('.img').removeClass('green-img');
    $(this).addClass('green-img');
  });

  
  // fade and slide to toggle
  $('#green-fade-toggle').click(function(){
    $('.green-img').fadeToggle();
  });
  
  $('#green-slide-toggle').click(function(){
    $('.green-img').slideToggle();
  });


  // change border-radius
  $('#green-circle').click(function(){
    $('.green-img').animate({
      'border-radius':'50%'
    }, 500);
  });

  $('#green-square').click(function(){
    $('.green-img').animate({
      'border-radius':'0%'
    }, 500);
  });

  let isGreenSquare = true;
  $('#green-radius-toggle').click(function(){
    if(isGreenSquare){
      $('.green-img').animate({
        'border-radius':'50%'
      }, 500);
      isGreenSquare = false;
    }else{
      $('.green-img').animate({
        'border-radius':'0%'
      }, 500);
      isGreenSquare = true;
    }
  });


});