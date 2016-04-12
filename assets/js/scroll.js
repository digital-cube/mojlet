

var absWidth;
absWidth = $(window).width();

    if(absWidth<768){
        $("#navigation").addClass("scrolling").removeClass("nav-li-padd-before").addClass("nav-li-padd-after");
    }
    function resize_nav(){
            absWidth = $(window).width();
        if(absWidth>768 && scroll <= 33){
            $("#navigation").removeClass("scrolling").removeClass("nav-li-padd-after").addClass("nav-li-padd-before");
        }
    }
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        var x = 0;
        var width = 50;
        var newWidth;

        if (scroll >= 33 && absWidth>768) {
               
                $("#navigation").addClass("scrolling").removeClass("nav-li-padd-before").addClass("nav-li-padd-after");
                if(scroll<=60)newWidth = 60-(scroll-33);
                else newWidth=40;
                   
                $("#logo").attr('width',newWidth);

        } else {
            if(absWidth>768){$("#navigation").removeClass("scrolling").removeClass("nav-li-padd-after").addClass("nav-li-padd-before");
                $("#logo").attr('width','');
            }
        }
        if(!$('.scrollcheck').hasClass('active')){
            $('.person').addClass('pers-active');
            $('.details').hide();

        }    

    });
