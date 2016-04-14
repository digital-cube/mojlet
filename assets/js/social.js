// Declare Arrays
  imgList = new Array();
  imgList["ref1"] = new Array();
  imgList["ref2"] = new Array();
  imgList["ref3"] = new Array();
  imgList["ref4"] = new Array();
  imgList["ref5"] = new Array();
  imgList["ref6"] = new Array();

//Set values for each mouse state
  imgList["ref1"]["out"] = "./assets/images/social/fb.png";
  imgList["ref1"]["over"] = "./assets/images/social/fb-hover.png";
  imgList["ref2"]["out"] = "./assets/images/social/gp.png";
  imgList["ref2"]["over"] = "./assets/images/social/gp-hover.png";
  imgList["ref3"]["out"] = "./assets/images/social/tw.png";
  imgList["ref3"]["over"] = "./assets/images/social/tw-hover.png";
  imgList["ref4"]["out"] = "./assets/images/social/inst.png";
  imgList["ref4"]["over"] = "./assets/images/social/inst-hover.png"; 
  imgList["ref5"]["out"] = "./assets/images/social/ln.png";
  imgList["ref5"]["over"] = "./assets/images/social/ln-hover.png";
  imgList["ref6"]["out"] = "./assets/images/social/pint.png";
  imgList["ref6"]["over"] = "./assets/images/social/pint-hover.png";

 
 
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