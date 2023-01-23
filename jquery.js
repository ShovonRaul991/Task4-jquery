$(document).ready(function(){
    let fullName = $('#fullname');
    let emailAddress = $('#emailaddress');
    let org = $('#org');
    let emailStatus = $('#required-email');
    

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
        
        if(fullName.val() === '' || emailAddress.val()==='' || org.val()==='' || emailStatus.text() === "Email is incorrect.")
        {
            $('#error-message').html("Please fill all the required fields below");
            event.preventDefault();
        }
        if(fullName.val()==='')
        {
            $('#required-fullname').text("Name is required.");
        }
        if(emailAddress.val()==='')
        {
            $('#required-email').text("Email is required.");
        }
        if(org.val()==='')
        {
            $('#required-org').text("Organization needed");
        }
        if(emailStatus.text() ==="Email is correct." && fullName.val()!=="" && emailAddress.val()!=="" && org.val()!=="")
        {
            alert("Form is Submitted");
        }
    });

    $("#submit").on('click',function(event){
        
        if(fullName.val() === '' || emailAddress.val()==='' || emailStatus.text() === "Email is incorrect."){
            alert("Please fill all the required fields below");
            event.preventDefault();
        }
        else{
            alert("Form Submitted");
        }
    });

    $('#emailaddress').on('input',function(){
        let validemail = /^[a-zA-Z0-9. ]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailAddress.val().match(validemail))
        {
            $('#required-email').text("Email is correct.");
        }
        
        else if(emailAddress.val()===''){
            $('#required-email').text("Email is required.");
        }
        
        else{
            $('#required-email').text("Email is incorrect.")
        }
    });

    $('#fullname').on('input', function(){
        if(fullName.val()==="")
        {
            $('#required-fullname').text("Name is required.");
        }
        else{
            $('#required-fullname').text("*");
        }
    });

    $('#org').on('input',function(){
        if(org.val()===""){
            $('#required-org').text("organization needed");
        }
        else{
            $('#required-org').text("*");
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




