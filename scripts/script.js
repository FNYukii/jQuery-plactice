$(function(){

  let isOpenMenu = false;
  $('#toggle-menu').click(function(){
    if(isOpenMenu){
      $('.bars-global-nav').slideUp();
      $(this).html('<i class="fas fa-bars"></i>');
      isOpenMenu = false;
    }else{
      $('.bars-global-nav').slideDown();
      $(this).html('<i class="fas fa-times"></i>');
      isOpenMenu = true;
    }
  });


});