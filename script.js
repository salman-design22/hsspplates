// Current Page
let currentPage = "home";

// Booking Step
let currentStep = 1;

// Show Pages
function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    currentPage = pageId;
}

// Booking Steps
function nextStep() {

    if (currentStep < 4) {

        document.getElementById(`step${currentStep}`).style.display = "none";

        currentStep++;

        document.getElementById(`step${currentStep}`).style.display = "block";

        updateSteps();

        if (currentStep === 3) {
            generateQR();
        }
    }
}

function prevStep() {

    if (currentStep > 1) {

        document.getElementById(`step${currentStep}`).style.display = "none";

        currentStep--;

        document.getElementById(`step${currentStep}`).style.display = "block";

        updateSteps();
    }
}

// Step Indicator Update
function updateSteps() {

    const steps = document.querySelectorAll(".step");

    steps.forEach((step, index) => {

        if (index < currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }

    });
}

// Dynamic QR Generator
function generateQR() {

    const qr = document.getElementById("qr");

    qr.innerHTML = "";

    for (let i = 0; i < 25; i++) {

        const cell = document.createElement("div");

        cell.style.background =
            Math.random() > 0.5
                ? "#000"
                : "#fff";

        qr.appendChild(cell);
    }
}

// Contact Form
document.addEventListener("DOMContentLoaded", () => {

    const contactBtn = document.querySelector("#contact button");

    if (contactBtn) {

        contactBtn.addEventListener("click", () => {

            alert(
                "Your message has been sent successfully."
            );

        });

    }

});

// Smooth Scroll Top
window.addEventListener("load", () => {

    showPage("home");

});

// Fake Order Tracking
function trackOrder() {

    const ref = prompt(
        "Enter Reference ID"
    );

    if (!ref) return;

    alert(
        `Order ${ref} is currently under verification.\n\nExpected Dispatch: 5-7 Working Days`
    );

}

// Random HSRP Reference Number
function generateReference() {

    const randomNumber =
        Math.floor(
            100000 + Math.random() * 900000
        );

    return `HSR-${randomNumber}`;
}

// Set Dynamic Reference on Success Page
document.addEventListener("DOMContentLoaded", () => {

    const strongTag =
        document.querySelector(".success strong");

    if (strongTag) {
        strongTag.innerText =
            generateReference();
    }

});

// Mobile Nav Toggle (Future Use)
function toggleMenu() {

    const nav =
        document.querySelector("nav");

    nav.classList.toggle("show");

}

// FAQ Auto Close Others
document.querySelectorAll("details").forEach(detail => {

    detail.addEventListener("toggle", () => {

        if (detail.open) {

            document
                .querySelectorAll("details")
                .forEach(other => {

                    if (
                        other !== detail
                    ) {
                        other.open = false;
                    }

                });

        }

    });

});

// Console Welcome
console.log(
    "HSRP Booking Portal Loaded Successfully"
);
