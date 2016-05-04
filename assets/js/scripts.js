    
 var imagesgall = [
                {
                    'smallUrl':'img-t1.png',
                    'bigUrl':'img-1.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t2.png',
                    'bigUrl':'img-2.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t3.png',
                    'bigUrl':'img-3.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t4.png',
                    'bigUrl':'img-4.jpg',
                    'title': '',
                    'alt': '',
                },
                   {
                    'smallUrl':'img-t5.png',
                    'bigUrl':'img-5.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t6.png',
                    'bigUrl':'img-6.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t7.png',
                    'bigUrl':'img-7.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t8.png',
                    'bigUrl':'img-8.jpg',
                    'title': '',
                    'alt': '',
                },
                   {
                    'smallUrl':'img-t9.png',
                    'bigUrl':'img-9.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t10.png',
                    'bigUrl':'img-10.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t11.png',
                    'bigUrl':'img-11.jpg',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t12.png',
                    'bigUrl':'img-12.jpg',
                    'title': '',
                    'alt': '',
                },
 ];

 // var no=0;

 // Object.keys(imagesgall).forEach(function(img){  
            imagesgall.forEach(function(img){
                var galleryHolder =  '<div class="col-lg-2 col-md-2 col-xs-6 thumb">'+
                      '<a class="thumbnail" data-toggle="modal" data-target="#" href="#">'+
                      '<img class=" imgSmall img-responsive" data-id="'+img['bigUrl']+'" src="./assets/images/gall/'+img['smallUrl']+'" alt="">'+
                      '</a></div>';
                     // no++;
                 $('#gallery-holder').append(galleryHolder);
                });
            
$(document).ready(function() {


    function onkeypress(){
        $(document).on('keyup',function(evt) {
            if (evt.keyCode == 27) {
                $("#imgBig").attr("src", "");
                $("#overlay").fadeOut();
                $("#overlayContent").fadeOut();

            }


        });
    }
//email add 
        var email = 'mo' + 'jl' + 'et' +
                    '@' + 'di' + 'gi' +
                    'tal' + 'cube' + 
                    '.' + 'rs';
                    
        $('#mail_append').html(email);
        $('#mail_append').attr('href','mailto:'+email);

//gallery add        
$(".imgSmall").click(function(){
    onkeypress()
    var takeSrc = $(this).attr('data-id');
    $("#imgBig").attr("src","./assets/images/gall/"+takeSrc);
    $("#overlay").fadeIn();
    $("#overlayContent").fadeIn();
});

$("#overlayContent").click(function(){
    $("#imgBig").attr("src", "");
    $("#overlay").fadeOut();
    $("#overlayContent").fadeOut();
});

  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

var width = $(window).width();
        if(width > 768 && width <= 991){
resize_img(width)

}

$(window).resize(function() {
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

    var width = $(window).width();
    resize_img(width)
});

function resize_img(width){
        if(width > 768 && width <= 991){
            $('#about_image').attr('src','./assets/images/petar-full.png');
        }else{
            $('#about_image').attr('src','./assets/images/petar-about.png');

        }
    }
});
$(document).ready(function() {
   
      $("#sponsors-carousel").owlCarousel({items : 4,rewindNav : false, 
    pagination : false,  });
});
$(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
                //$lightbox.find('.modal-dialog').css({'width': $img.width()});

    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});