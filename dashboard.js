// =========================
// RiseUp Dashboard
// =========================

// Motivational Quotes
const dashboardQuotes = [
    "Discipline is doing what needs to be done even when you don't feel like it.",
    "Your future is created by what you do today.",
    "Don't watch the clock. Do what it does. Keep going.",
    "Small progress is still progress.",
    "Dream big. Work hard. Stay humble.",
    "Consistency beats motivation.",
    "Success is built one day at a time.",
    "Your only competition is who you were yesterday.",
    "Push yourself because nobody else will do it for you.",
    "Every expert was once a beginner."
];

// Load dashboard
function loadDashboard() {

    let progress = localStorage.getItem("progress");

    if(progress == null){
        progress = 0;
        localStorage.setItem("progress",0);
    }

    document.getElementById("progressBar").style.width = progress + "%";
}

// Increase Progress
function increaseProgress(){

    let progress = Number(localStorage.getItem("progress"));

    if(progress < 100){

        progress += 10;

        if(progress > 100)
            progress = 100;

        localStorage.setItem("progress",progress);

        document.getElementById("progressBar").style.width = progress + "%";

    }
}

// Random Quote
function changeQuote(){

    const random = Math.floor(Math.random()*dashboardQuotes.length);

    document.getElementById("dailyQuote").innerHTML =
    dashboardQuotes[random];

}

// Save Daily Checklist
const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach((box,index)=>{

    const saved = localStorage.getItem("task"+index);

    if(saved==="true")
        box.checked=true;

    box.addEventListener("change",()=>{

        localStorage.setItem("task"+index,box.checked);

    });

});

// Greeting Based on Time
const hour = new Date().getHours();

let greeting = "";

if(hour < 12)
    greeting = "☀️ Good Morning";
else if(hour < 18)
    greeting = "🌤️ Good Afternoon";
else
    greeting = "🌙 Good Evening";

console.log(greeting);
