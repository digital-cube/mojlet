// Declare Arrays
  imgList = new Array();
  imgList["ref1"] = new Array();
  imgList["ref2"] = new Array();
  imgList["ref3"] = new Array();
  imgList["ref4"] = new Array();
  imgList["ref5"] = new Array();
  imgList["ref6"] = new Array();

//Set values for each mouse state
  imgList["ref1"]["out"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/fb.png";
  imgList["ref1"]["over"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/fb-hover.png";
  imgList["ref2"]["out"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/gp.png";
  imgList["ref2"]["over"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/gp-hover.png";
  imgList["ref3"]["out"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/tw.png";
  imgList["ref3"]["over"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/tw-hover.png";
  imgList["ref4"]["out"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/inst.png";
  imgList["ref4"]["over"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/inst-hover.png"; 
  imgList["ref5"]["out"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/ln.png";
  imgList["ref5"]["over"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/ln-hover.png";
  imgList["ref6"]["out"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/pint.png";
  imgList["ref6"]["over"] = "http://adrenalynmapp.com/news/wp-content/uploads/2016/03/pint-hover.png";

 
 
  $('.img').each(function(){
   $(this).attr("src", imgList[ $(this).attr("id") ]["out"]);
    imgsrc = this.src;
   console.log(imgsrc);
  });
//Add the swapping functions
  $(".img").mouseenter(function(){
    $(this).attr("src", imgList[ $(this).attr("id") ]["over"]);
  }).mouseleave(function(){
    $(this).attr("src", imgList[ $(this).attr("id") ]["out"]);
  });