$(function(){
  

  // Standard Clock
  clockFunc();
  setInterval(clockFunc, 1000);
  function clockFunc(){
    let now = new Date();
    let hour = now.getHours();
    let minites = now.getMinutes();
    let seconds = now.getSeconds();
    if(hour < 10){
      hour = '0' + hour;
    }
    if(minites < 10){
      minites = '0' + minites;
    }
    if(seconds < 10){
      seconds = '0' + seconds;
    }
    $('#current-time').text(hour + ':' + minites + ':' + seconds);
  }
  
  
  
  
  
  
  
  
});



