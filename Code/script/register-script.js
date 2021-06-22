var error = document.getElementById("error-message");

function validateForm(){
    if(validateEmail() && validateUsername() && validatePassword() && validateCheckbox()){
        alert("Register Success !");
        error.innerHTML = "";
        document.getElementById("emailtxt").value = "";
        document.getElementById("usernametxt").value = "";
        document.getElementById("passwordtxt").value = "";
        document.getElementById("confirm-passwordtxt").value = "";
        document.getElementById("tnc-checkbox").checked = false;
    } else {
        return;
    }
}

function validateEmail(){
    var emailInput = document.getElementById("emailtxt").value.trim();
    if(!emailInput.length > 0){
        error.innerHTML = "Email must be filled !";
        return false;
    } else if(!emailInput.includes('@')){
        error.innerHTML = "Email must contain @ !";
        return false;
    } else if(!emailInput.endsWith(".com")){
        error.innerHTML = "Email must end with .com !";
        return false;
    } else if(emailInput.length <= 5){
        error.innerHTML = "Email can't only contain '@' and '.com' !";
        return false;
    }
    return true;
}

function validateUsername(){
    var usernameInput = document.getElementById("usernametxt").value.trim();
    if(!usernameInput.length > 0){
        error.innerHTML = "Username must be filled !";
        return false;
    } else if(usernameInput.length <= 5){
        error.innerHTML = "Username must be more than 5 characters !";
        return false;
    } else if(!checkAlphaNumeric(usernameInput)){
        error.innerHTML = "Username must be alphanumeric !";
        return false;
    } else if(!checkContainAlphaNumeric(usernameInput)){
        error.innerHTML = "Username must only contain alphabets and numbers !";
        return false;
    }
    return true;
}

function validatePassword(){
    var passInput = document.getElementById("passwordtxt").value.trim();
    var confPassInput = document.getElementById("confirm-passwordtxt").value.trim();

    if(!passInput.length > 0){
        error.innerHTML = "Password must be filled !";
        return false;
    } else if(!confPassInput.length > 0){
        error.innerHTML = "Confirm Password must be filled !";
        return false;
    } else if(passInput != confPassInput){
        error.innerHTML = "Password and Confirm Password doesn't match !";
        return false;
    } else if(passInput.length < 6){
        error.innerHTML = "Password must be more than 5 characters !";
        return false;
    } else if(!checkAlphaNumeric(passInput)){
        error.innerHTML = "Password must at least contain 1 alphabet and 1 number !";
        return false;
    }
    return true;
}

function validateCheckbox(){
    var checked = document.getElementById("tnc-checkbox").checked;
    if(!checked){
        error.innerHTML = "Must Agree with Terms and Conditions !";
        return false;
    }
    return true;
}


function checkAlphaNumeric(usernameInput){
    var count = [0, 0];

    for(var i  = 0; i < usernameInput.length; i++){
        var temp = usernameInput.charAt(i);
        if((temp >= 'A' && temp <= 'Z') || (temp >= 'a' && temp <= 'z')){
            count[0] = 1;
        } else if(temp >= '0' && temp <= '9'){
            count[1] = 1;
        }
    }

    if(count[0] == 1 && count[1] == 1){
        return true;
    } 
    return false;
}

function checkContainAlphaNumeric(usernameInput){
    for(var i = 0; i < usernameInput.length; i++){
        temp = usernameInput.charAt(i);
        if(!(temp >= 'A' && temp <= 'Z') && !(temp >= 'a' && temp <= 'z') && !(temp >= '0' && temp <= '9')){
            return false;
        }
    }
    return true;
}