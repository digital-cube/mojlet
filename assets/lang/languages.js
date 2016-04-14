
// English and serbian translate

var lang=new Array();
lang['en']=new Array();
lang['sr']=new Array();
//nav
lang['en']['about']='About';
lang['en']['gallery']='Gallery';
lang['en']['book']='Book';
lang['en']['sponsors']='Sponsors';
//header
lang['en']['explore']='Explore more';

//about
lang['en']['about_title']='Fly with Petar Loncar';
lang['en']['about_button']='About Petar';

lang['en']['about_text_1']='Petar Loncar is proud to call himself the first professional Serbian acro paraglider. Since he was born, he was interested in sports and at 18 years old, he joined the parachute military unit so that he could train in the skies.';

lang['en']['about_text_2']='In Serbia there was virtually no acrobatic flying scene, but after his first live acrobatic flying encounter in 2007, Petar was inspired. He went on to perfect some of the most difficult tricks in acro paragliding, including infinity tumbling, which grabbed the attention of acrobatic flyers around the world.';

lang['en']['about_text_3']='In the years that followed, Petar continued to compete in the world acro cups and aero events, perfecting his skills on expeditions and projects around the world.';


//Gallery
lang['en']['gallery_title']='Photo Gallery';


//Book

lang['en']['book_title']='Book a flight';
lang['en']['book_button']='How does it work?';

lang['en']['work_text_1']='Lorrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem ';

lang['en']['work_text_2']='impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum ';

lang['en']['work_text_3']='orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum';

//contact
lang['en']['firstName']='First Name';
lang['en']['lastName']='Last Name';
lang['en']['email']='E-mail address';
lang['en']['phone']='Phone number';
lang['en']['select']='Sport interested in';

lang['en']['form_button']='Submit';

//Sponzors
lang['en']['sponsors']='Sponsors';

//footer
lang['en']['footer_title']='LOREM IPSUM';
lang['en']['footer_text_1']='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id luctus sapien. Suspendisse varius viverra urna, id laoreet sapien pretium non. Nam at mauris ultrices, efficitur urna in, fermentum velit.';
lang['en']['footer_text_2']='Nunc consequat tortor commodo enim vestibulum pellentesque vestibulum sed dui.';
lang['en']['site']='Mojlet.rs';
lang['en']['icon_title']='FOLLOW US ON THESE NETWORKS';

lang['en']['icon_text']='OR WRITE TO US AT';
lang['en']['icon_email']='OFFICE@MOJLET.RS';



//srpski prevod

//nav
lang['sr']['about']='Pocetna';
lang['sr']['gallery']='Galerija';
lang['sr']['book']='Knjiga';
lang['sr']['sponsors']='Sponzori';
//header
lang['sr']['explore']='Explore more';

//about
lang['sr']['about_title']='Leti sa Petrom Loncar';
lang['sr']['about_button']='O Petru';

lang['sr']['about_text_1']='Petar Loncar is proud to call himself the first professional Serbian acro paraglider. Since he was born, he was interested in sports and at 18 years old, he joined the parachute military unit so that he could train in the skies.';

lang['sr']['about_text_2']='In Serbia there was virtually no acrobatic flying scene, but after his first live acrobatic flying encounter in 2007, Petar was inspired. He went on to perfect some of the most difficult tricks in acro paragliding, including infinity tumbling, which grabbed the attention of acrobatic flyers around the world.';

lang['sr']['about_text_3']='In the years that followed, Petar continued to compete in the world acro cups and aero events, perfecting his skills on expeditions and projects around the world.';


//Gallery
lang['sr']['gallery_title']='Galerija fotografija';


//Book

lang['sr']['book_title']='Knjiga letova';
lang['sr']['book_button']='Kako funkcionise?';

lang['sr']['work_text_1']='Lorrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem ';

lang['sr']['work_text_2']='impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum ';

lang['sr']['work_text_3']='orrem impsum orrem impsum orrem impsum orrem impsum orrem impsum';

//contact
lang['sr']['firstName']='Ime';
lang['sr']['lastName']='Prezime';
lang['sr']['email']='E-mail adresa';
lang['sr']['phone']='Broj telefona';
lang['sr']['select']='Zainteresovani za';

lang['sr']['form_button']='Posalji';

//Sponzors
lang['sr']['sponsors']='Sponzori';

//footer
lang['sr']['footer_title']='LOREM IPSUM';
lang['sr']['footer_text_1']='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id luctus sapien. Suspendisse varius viverra urna, id laoreet sapien pretium non. Nam at mauris ultrices, efficitur urna in, fermentum velit.';
lang['sr']['footer_text_2']='Nunc consequat tortor commodo enim vestibulum pellentesque vestibulum sed dui.';
lang['sr']['site']='Mojlet.rs';
lang['sr']['icon_title']='Nase drustvene mreze';

lang['sr']['icon_text']='Pisite nam na';
lang['sr']['icon_email']='OFFICE@MOJLET.RS';



$(document).ready(function() {

    $('.langs').on('click' ,function() {
        var langs = $(this).attr('id');
       	
        $('.tr').each(function(i){
          $(this).text(lang[langs][ $(this).attr('key') ]);
          
        });
        $('.ts').each(function(i){
          $(this).attr('placeholder',lang[langs][ $(this).attr('key') ]);  
        });

    } );

});