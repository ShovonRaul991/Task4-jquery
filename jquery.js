$(document).ready(function(){
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
        let x = $('#fullname').val();
        let y = $('#emailaddress').val();
        let z = $('#org').val();
        let em = $('#required-email').text();
        if(x === '' || y==='' || z==='' || em === "Email is incorrect.")
        {
            $('#error-message').html("Please fill all the required fields below");
            event.preventDefault();
        }
        if(x==='')
        {
            $('#required-fullname').text("Name is required.");
        }
        if(y==='')
        {
            $('#required-email').text("Email is required.");
        }
        if(z==='')
        {
            $('#required-org').text("*");
        }
        if(em ==="Email is correct." && x!=="" && y!=="" && z!=="")
        {
            alert("Form is Submitted");
        }
    });

    $("#submit").on('click',function(event){
        let x = $('#fullname').val();
        let y = $('#emailaddress').val();
        let em = $('#required-email').text();
        if(x === '' || y==='' || em === "Email is incorrect."){
            alert("Please fill all the required fields below");
            event.preventDefault();
        }
        else{
            alert("Form Submitted");
        }
    });

    $('#emailaddress').on('change',function(){
        let mail = $("#emailaddress").val();
        let valid_email = /^[a-zA-Z0-9. ]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(mail.match(valid_email))
        {
            $('#required-email').text("Email is correct.");
        }
        else{
            $('#required-email').text("Email is incorrect.");
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




