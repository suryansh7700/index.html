// =============================
// RiseUp Authentication System
// =============================

// Create default admin account
if (!localStorage.getItem("users")) {

    const defaultUsers = [
        {
            username: "admin",
            password: "riseup123"
        }
    ];

    localStorage.setItem("users", JSON.stringify(defaultUsers));
}

// ---------- SIGN UP ----------

function signup() {

    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    const error = document.getElementById("error");
    const message = document.getElementById("message");

    error.innerHTML = "";
    message.innerHTML = "";

    if(username==="" || password===""){
        error.innerHTML="Please fill all fields.";
        return;
    }

    if(password.length < 6){
        error.innerHTML="Password must be at least 6 characters.";
        return;
    }

    if(password !== confirm){
        error.innerHTML="Passwords do not match.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users"));

    let exists = users.find(user=>user.username===username);

    if(exists){
        error.innerHTML="Username already exists.";
        return;
    }

    users.push({
        username:username,
        password:password
    });

    localStorage.setItem("users",JSON.stringify(users));

    message.innerHTML="Account created successfully! Redirecting...";

    setTimeout(()=>{
        window.location="login.html";
    },1500);

}


// ---------- LOGIN ----------

function login(){

    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value;

    const error=document.getElementById("error");

    error.innerHTML="";

    let users=JSON.parse(localStorage.getItem("users"));

    let valid=users.find(user=>

        user.username===username &&
        user.password===password

    );

    if(valid){

        localStorage.setItem("loggedInUser",username);

        window.location="dashboard.html";

    }

    else{

        error.innerHTML="Invalid username or password.";

    }

}


// ---------- CHECK LOGIN ----------

function checkLogin(){

    const user=localStorage.getItem("loggedInUser");

    if(!user){

        window.location="login.html";

    }

}


// ---------- SHOW USER ----------

function loadUser(){

    const username=localStorage.getItem("loggedInUser");

    if(document.getElementById("welcomeUser")){

        document.getElementById("welcomeUser").innerHTML=username;

    }

}


// ---------- LOGOUT ----------

function logout(){

    localStorage.removeItem("loggedInUser");

    window.location="login.html";

}
