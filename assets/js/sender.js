$(document).ready(function() {
    $('#sendmessage').on('click', function() {
        submitForm(); // To prevent following the link (optional)
      alert('mladen');
      }); 
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

        if(firstName == '' && email=='' && lastName==''){
        	addText("Empty fields.")
        }else if(firstName==''){
        	addText("First name is empty.");

        }else if(lastName==''){
        	addText("Last name is empty.");

        }else if(email==''){
        	addText("Email is empty.");

        }else if( !isValidEmailAddress( email ) ) {
        	addText("Email is not corect.");

        }else{
            //http://digitalcube.rs/econtact/contact
            var params = {
                    firstName:firstName,
                    lastName:lastName,
                    phone:phone
                }
            var msg='message'
    	    $.ajax({
    	        type: "PUT",
                url: "http://digitalcube.rs/econtact/contact",
    	        data: {data:JSON.stringify(params),email:email,mailmsg:msg},
                    
    	        success : function(text){
      					addText("Thank you, we will soon contact you.");           
    	        },
    	        error: function (response) {
    	                 addText("Thank you, we will soon contact you.");

    				},
    	    });
                                console.log(params,email,msg);

    	}
    }


    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

});