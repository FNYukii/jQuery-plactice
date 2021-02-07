$(function(){

  
  // select previus img
  $('#select-prev').click(function(){
    let $greenImg = $('.selected-img');
    let greenIndex = $('.img').index($greenImg);
    $greenImg.removeClass('selected-img');
    if(greenIndex != 0){
      $greenImg.prev().addClass('selected-img');
    }else{
      $('.img').eq($('.img').length - 1).addClass('selected-img');
    }
  });

  // select next img
  $('#select-next').click(function(){
    let $greenImg = $('.selected-img');
    let greenIndex = $('.img').index($greenImg);
    $greenImg.removeClass('selected-img');
    if(greenIndex != $('.img').length -1){
      $greenImg.next().addClass('selected-img');
    }else{
      $('.img').eq(0).addClass('selected-img');
    }
  });

  // select clicked img
  $('.img').click(function(){
    $('.img').removeClass('selected-img');
    $(this).addClass('selected-img');
  });

  // add a img
  $('#add-img').click(function(){
    $('.images').append("<div class='img'>" + $(".img").length + "</div>");
    $('.img').click(function(){
      $('.img').removeClass('selected-img');
      $(this).addClass('selected-img');
    });
  });

  
  // switch between fadein and fadeout
  $('#fade-toggle').click(function(){
    $('.selected-img').fadeToggle();
  });
  
  // switch between slidedown and slideup
  $('#slide-toggle').click(function(){
    $('.selected-img').slideToggle();
  });


  // switch border-radius
  let isGreenSquare = true;
  $('#radius-toggle').click(function(){
    if(isGreenSquare){
      $('.selected-img').animate({
        'border-radius':'50%'
      }, 500);
      $(this).html('<i class="far fa-circle"></i>');
      isGreenSquare = false;
    }else{
      $('.selected-img').animate({
        'border-radius':'0%'
      }, 500);
      $(this).html('<i class="far fa-square"></i>');
      isGreenSquare = true;
    }
  });


  // scroll to page top
  $('#scroll-top').click(function(){
    $('html, body').animate({
      scrollTop: 0
    });
  });

  // the button move to right
  let isMoved = false;
  $('#button-move').click(function(){
    if(isMoved){
      $(this).animate({
        "margin-left": 0
      });
      isMoved = false;
    }else{
      $(this).animate({
        "margin-left": "120px"
      });
      isMoved = true;
    }
  });


  // show mouse pointer position
  $(window).mousemove(function(e){
    $('.mouse-x').html('X: ' +  e.pageX + ' px');
    $('.mouse-y').html('Y: ' +  e.pageY + ' px');
  }); 


});