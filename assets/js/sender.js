$(document).ready(function() {
    $('#sendmessage').on('click', function() {
        submitForm(); // To prevent following the link (optional)
      }); 
    var activeSubscribe;
    var subscriber ='<form>'+
                    '<div class="form-group">'+
                    '<div style="color:white;" id="subscribe-info"></div>'+
                    '<input type="email" class="form-control" placeholder="Please enter your email" id="subsemail"/>'+
                    '<input type="hidden" id="project_id" />'+
                    '</div>'+
                    '<div id="subscribe"  class="btn  pull-right btn-default">Subscribe</div>'+
                    '</form>';

    $('.subscribe-box').html(subscriber);
    $('.subscribe-box').hide();

    $('.read_more').on('click', function(){

        var id_project = $(this).attr('id');
        var project_id  = $('#project_id').val(id_project);
        $('.subscribe-box').fadeIn();
        activeSubscribe = true;
    });

    $('#subscribe').on('click', function() {
        
        subscribeForm();

    });  		
    // $('desctop').on('click', function(){
    //     if(activeSubscribe){    $('.subscribe-box').fadeOut();}

    // });
	function addText(text){
    	$( "#info" ).html( text ).css('margin-top','-40px').css('padding','10px 0px');
    }
    function submitForm(){
        // Initiate Variables With Form Content
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var interested = $("#interested").val();
        
        if(name == '' && email=='' && interested == ''){
        	addText("Empty fields.")
        }else if(name==''){
        	addText("Name is empty.");
        	$('#name').focus();

        }else if(email==''){
        	addText("Email is empty.");
        	$('#email').focus();

        }else if(interested==''){
        	addText("Message is empty.");
        	$('#message').focus();

        }else if( !isValidEmailAddress( email ) ) {
        	addText("Email is not corect.");
        	$('#email').focus();

        }else{
            //http://digitalcube.rs/econtact/contact
    	    $.ajax({
    	        type: "PUT",
                url: "http://localhost:9885/econtact/contact",
    	        data: {
                    firstName:firstName,
                    lastName:lastName,
    				email:email,
                    phone:phone,
    				interested:interested
    	        },
    	        success : function(text){
      					addText("Thank you, we will soon contact you.");           
    	        },
    	        error: function (response) {
    	                 addText("Thank you, we will soon contact you.");

    				},
    	    });
    	}
    }


    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

});