// =========================
// RiseUp - script.js
// =========================

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

// Motivational Quotes
const quotes = [
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Success is the sum of small efforts repeated every day.",
        author: "Robert Collier"
    },
    {
        quote: "Dream big. Start small. Act now.",
        author: "Robin Sharma"
    },
    {
        quote: "Your only limit is your mind.",
        author: "Unknown"
    },
    {
        quote: "Don't stop until you're proud.",
        author: "Unknown"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Push yourself because no one else will do it for you.",
        author: "Unknown"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        quote: "Consistency beats motivation.",
        author: "RiseUp"
    }
];

function newQuote() {

    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        `"${quotes[random].quote}"`;

    document.getElementById("author").innerText =
        "— " + quotes[random].author;
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .stat-card, .quote-box").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

// Dynamic Footer Year
const footer = document.querySelector("footer p:last-child");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} RiseUp`;
}

// Welcome Message
window.onload = function () {

    console.log("Welcome to RiseUp 🚀");

};
