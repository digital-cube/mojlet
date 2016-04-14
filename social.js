// Declare Arrays
  imgList = new Array();
  imgList["ref1"] = new Array();
  imgList["ref2"] = new Array();
  imgList["ref3"] = new Array();
  imgList["ref4"] = new Array();
  imgList["ref5"] = new Array();
  imgList["ref6"] = new Array();

//Set values for each mouse state
  imgList["ref1"]["out"] = "../images/fb.png";
  imgList["ref1"]["over"] = "../images/fb-hover.png";
  imgList["ref2"]["out"] = "../images/gp.png";
  imgList["ref2"]["over"] = "../images/gp-hover.png";
  imgList["ref3"]["out"] = "../images/tw.png";
  imgList["ref3"]["over"] = "../images/tw-hover.png";
  imgList["ref4"]["out"] = "../images/inst.png";
  imgList["ref4"]["over"] = "../images/inst-hover.png"; 
  imgList["ref5"]["out"] = "../images/ln.png";
  imgList["ref5"]["over"] = "../images/ln-hover.png";
  imgList["ref6"]["out"] = "../images/pint.png";
  imgList["ref6"]["over"] = "../images/pint-hover.png";

 
 
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