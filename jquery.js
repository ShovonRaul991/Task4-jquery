let fullName = $('#fullname');
let emailAddress = $('#emailaddress');
let org = $('#org');
let emailStatus = $('#required-email');


$(".reset-button").on('click',function(){
    $("#contactUs").trigger('reset');
});

$('#states').on('change', function(){
    let name = $('#states').val();
    if(name){
    name = name+'-PROMO';
    $("#promotional").val(name);
    }
    else{
        $("#promotional").val("");
    }
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

    //$.fn.validateFunction();
    $.fn.emailValidation();
    $.fn.nameValidation();
    $.fn.orgValidation();
    if(!fullName.val() || !emailAddress.val() || !org.val() || emailStatus.text()==="Email is incorrect.")
    {
        $('#error-message').html("Please fill all the required fields below");
        event.preventDefault();
    }
    if(fullName.val() && emailAddress.val() && org.val() && emailStatus.text()!=="Email is incorrect.")
    {
        alert("Form is Submitted");
    }  
});

$("#submit").on('click',function(event){
    
    $.fn.nameValidation();
    $.fn.emailValidation();
    if(!fullName.val() || !emailAddress.val() || emailStatus.text()==="Email is incorrect."){
        alert("Please fill all the required fields below");
        event.preventDefault();
    }
    else{
        alert("Form Submitted");
    }
});

$('#emailaddress').on('input',function(){
    $.fn.emailValidation();
});

$('#fullname').on('input', function(){
    $.fn.nameValidation();
});

$('#org').on('input',function(){
    $.fn.orgValidation();
});


$('.browse').on('click',function(){
    $("#getfiles").trigger('click');
    return false;
});

$("#getfiles").on('change',function(event){
    let fname = event.target.files[0].name;
    $('#selected-file').val(fname);
});

$.fn.nameValidation = function(){
    if(!fullName.val())
    {
        $('#required-fullname').text("Name is required.");
    }
    else{
        $('#required-fullname').text("*");
    }
}

$.fn.emailValidation = function(){
    let validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailAddress.val().match(validemail))
    {
        $('#required-email').text("*");
    }
    
    else if(!emailAddress.val()){
        $('#required-email').text("Email is required.");
    }
    
    else{
        $('#required-email').text("Email is incorrect.")
    }
}

$.fn.orgValidation = function(){
    if(!org.val()){
        $('#required-org').text("Organization needed");
    }
    else{
        $('#required-org').text("*");
    }
}




