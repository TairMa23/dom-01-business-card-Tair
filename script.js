// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty
const cardForm = document.getElementById("card-form");

const nameInput = document.getElementById("name-input");
const cardName = document.getElementById("card-name");
const avatar = document.getElementById("avatar");


const jobInput = document.getElementById("job-input");
const cardJob = document.getElementById("card-job");

const emailInput = document.getElementById("email-input");
const cardEmail = document.getElementById("card-email");

const bioInput = document.getElementById("bio-input");
const cardBio = document.getElementById("card-bio");

cardForm.addEventListener("input", () => {
    const name = nameInput.value.trim();
    cardName.textContent = name || "Your name";
    avatar.textContent = name ? name[0].toUpperCase() : "?";
    cardJob.textContent = jobInput.value.trim() || "Your job title";

    cardEmail.textContent = emailInput.value.trim() || "your@email.com";
    cardBio.textContent = bioInput.value.trim() || "Your bio will appear here.";
})


// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left
const bioLeft = document.getElementById("bio-left");
const counter = document.querySelector(".counter");

bioInput.addEventListener("input", () => {
    const remaining = 80 - bioInput.value.length;

    bioLeft.textContent = remaining;
    counter.classList.toggle("warning", remaining <= 10);
})


// Step 4: accent color (card border + avatar background)
const colorSelect = document.getElementById("color-select");
const card = document.getElementById("card");

colorSelect.addEventListener("change", () => {
    const color = colorSelect.value;

    card.style.borderColor = color;
    avatar.style.background = color;
})

// Step 5: dark mode button
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light mode";
    } else {
        themeBtn.textContent = "Dark mode";
    }
})

// Step 6: reset button
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
    cardForm.reset();


    cardName.textContent = "Your name";
    avatar.textContent = "?";
    cardJob.textContent = "Your job title";
    cardEmail.textContent = "your@email.com";
    cardBio.textContent = "Your bio will appear here.";

    bioLeft.textContent = 80;
    counter.classList.remove("warning");

    card.style.borderColor = "";
    avatar.style.backgroundColor = "";

    document.body.classList.remove("dark");
    themeBtn.textContent = "Dark mode";
})
//
