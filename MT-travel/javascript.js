window.onload = function(){
    setTimeout("switch_Image()", 3000);
  }
  var current = 1;
  var num_image = 3;
  function switch_Image(){
      current++;
      document.images['image'].src ='./img/banner' + current + '.jpg';
     if(current < num_image){
       setTimeout("switch_Image()", 3000);
     }else if(current == num_image){
       current = 0;
       setTimeout("switch_Image()", 3000);
     }
 }