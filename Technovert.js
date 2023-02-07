let contactForm = document.getElementById("ContactUs");
let male = document.getElementById('Male');
let female = document.getElementById('Female')
let fullName = document.getElementById('FullName');
let emailAddress = document.getElementById('EmailAddress');
let org = document.getElementById('Org');
let emailStatus = document.getElementById('RequiredEmail');
let formError = document.getElementById('ErrorMessage');
let nameError = document.getElementById('RequiredFullname');
let emailError = document.getElementById('RequiredEmail');
let orgError = document.getElementById('RequiredOrg');
let inputFile = document.getElementById("GetFiles");
let showFile = document.getElementById('SelectedFile');
//let validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let validEmail = /^[0-9a-z.\s+_]+@[0-9a-z-.+]+\.[a-z]{2,4}$/;

function clearForm()
{
    contactForm.reset();
}

function addPromo(){
    
    let state = document.getElementById("States").value;
    if(state !==""){
        state = state + '-PROMO';
        document.getElementById('Promotional').value = state;
    }
    else{
        document.getElementById('Promotional').value = "";
    }
}

function genderSelection()
{
    if(male.checked==true){
        window.alert("Hello Sir")
    }
    else if(female.checked==true){
        window.alert("Hello lady")
    }
}



function contactUsFormValidation()
{
    
    validateName();
    validateEmail();
    validateOrg();

    if(!validateName() || !validateEmail() || !validateOrg()){
        formError.innerHTML =  "Please fill all the required fields below";
        event.preventDefault();
    }
    else{
        window.alert("Form is Submitted");
    }
    
}

function careerFormValidation(){

   validateName();
   validateEmail();
   if(!validateName() || !validateEmail()){
    window.alert("Please fill all the required fields below");
    event.preventDefault();
   }
   else{
    window.alert("Form Submitted");
   }

}

function validateEmail()
{
    
    
    if(emailAddress.value.match(validEmail))
    {
        emailError.textContent = "*";
        return true;
    }
    else if(!emailAddress.value)
    {
        emailError.textContent = "Email is required.";
        return false;
    }
    else{
        emailError.textContent = "Email is incorrect.";
        return false;
    }
}

function validateName(){
    if(!fullName.value){
        nameError.textContent = "Name is required.";
        return false;
    }
    
    else{
        nameError.textContent = "*";
        return true;
    }
}

function validateOrg(){
    if(!org.value){
        orgError.textContent = "Organisation needed";
        return false;
    }
    else{
        orgError.textContent = "*";
        return true;
    }
}

function fileGet()
{
    document.getElementById('GetFiles').click();
}

/*
inputfile.addEventListener("input", ()=>{
    if(inputfile.files.length){
        //console.log(inputfile.files);
        let showedfile = inputfile.files[0].name;
        showfile.value = showedfile;
    }
})
*/
