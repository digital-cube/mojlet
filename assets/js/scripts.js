
$(document).ready(function() {

var width = $(window).width();
        if(width > 768 && width <= 991){
resize_img(width)

}

$(window).resize(function() {
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
      $("#sponsors-carousel").owlCarousel({items : 4});
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
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});