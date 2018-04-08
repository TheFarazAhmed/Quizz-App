function submit() {
    var username = document.getElementById("username");
    var contact = document.getElementById("contact");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    localStorage.setItem("Name", username.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Number", contact.value);
    localStorage.setItem("Password", password.value);

    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please fill the form first");        
    }
    else{
        username.value = "";
        password.value = "";
        email.value = "";
        contact.value = "";
        window.location = "login.html"
    }
}
function login() {
    var user_email = document.getElementById("userEmail");
    var user_pw = document.getElementById("userPassword");
    var stored_email = localStorage.getItem("Email");
    var stored_pw = localStorage.getItem("Password");

    if(stored_email === "" && stored_pw === ""){
        alert("you need to sign-up first");
        window.location = "index.html";
    }
    else if(user_email.value === stored_email && user_pw.value === stored_pw) {
        window.location = "index2.html";
    }
    else {
        alert("there's something wrong, either Email or Password");
    }
  
}

function logout() {
    window.location = "login.html";
}

function f1()
{
window.location="login.html";
}