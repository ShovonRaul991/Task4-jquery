$(document).ready(function(){
    let fullname = $('#fullname');
    let emailaddress = $('#emailaddress');
    let org = $('#org');
    let email_status = $('#required-email');
    

    $(".reset-button").click(function(){
        $("#contactUs").trigger('reset');
    });

    $('#states').on('change', function(){
        let name = $('#states').val();
        name = name+'-PROMO';
        $("#promotional").val(name);
    });

    $('input[name="gender"]').on('change',function(){
        if($("#male").is(':checked')){
            alert("Hello Sir");
        }
        else if($("#female").is(':checked')){
            alert("Hello Lady");
        }
    });

    $("#submit-button").on('click',function(event){
        
        if(fullname.val() === '' || emailaddress.val()==='' || org.val()==='' || email_status.text() === "Email is incorrect.")
        {
            $('#error-message').html("Please fill all the required fields below");
            event.preventDefault();
        }
        if(fullname.val()==='')
        {
            $('#required-fullname').text("Name is required.");
        }
        if(emailaddress.val()==='')
        {
            $('#required-email').text("Email is required.");
        }
        if(org.val()==='')
        {
            $('#required-org').text("*");
        }
        if(email_status.text() ==="Email is correct." && fullname.val()!=="" && emailaddress.val()!=="" && org.val()!=="")
        {
            alert("Form is Submitted");
        }
    });

    $("#submit").on('click',function(event){
        
        if(fullname.val() === '' || emailaddress.val()==='' || email_status.text() === "Email is incorrect."){
            alert("Please fill all the required fields below");
            event.preventDefault();
        }
        else{
            alert("Form Submitted");
        }
    });

    $('#emailaddress').on('change',function(){
        let valid_email = /^[a-zA-Z0-9. ]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailaddress.val().match(valid_email))
        {
            $('#required-email').text("Email is correct.");
        }
        
        else if(emailaddress.val()===''){
            $('#required-email').text("Email is required.");
        }
        
        else{
            $('#required-email').text("Email is incorrect.")
        }
    });

    $('.browse').on('click',function(){
        $("#getfiles").trigger('click');
        return false;
    });

    $("#getfiles").on('change',function(event){
        let fname = event.target.files[0].name;
        $('#selected-file').val(fname);
    });
});




