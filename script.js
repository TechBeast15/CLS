document.addEventListener("DOMContentLoaded", () => {
  const hasRedirected = sessionStorage.getItem("redirected");

  if (!hasRedirected) {
    sessionStorage.setItem("redirected", "true");

    setTimeout(() => {
      // Open the redirect in a new tab
      window.open("https://direct-link.net/1350911/Fm9nuEul37ik", "_blank");
    }, 3000);
  }
});

// Form validation and call link
const submitBtn = document.getElementById("submitBtn");
const nameUser = document.getElementById("name");
const ageUser = document.getElementById("age");
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");

submitBtn.addEventListener("click", () => {
  // Clear previous messages
  nameError.textContent = "";
  ageError.textContent = "";

  const nameValue = nameUser.value.trim();
  const ageValue = ageUser.value.trim();
  const nameRegex = /^[A-Za-z\s'-]+$/;

  // Name validation
  if (nameValue === "") {
    nameError.textContent = "Enter your name.";
    nameUser.focus();
    return;
  }

  if (!nameRegex.test(nameValue)) {
    nameError.textContent = "Name should only contain letters (no numbers or symbols).";
    nameUser.focus();
    return;
  }

  // Age validation
  const ageNumber = parseInt(ageValue, 10);

  if (isNaN(ageNumber)) {
    ageError.textContent = "Enter a valid age.";
    ageUser.focus();
    return;
  }

  if (ageNumber < 18) {
    ageError.textContent = "You must be at least 18 years old.";
    ageUser.focus();
    return;
  }

  if (ageNumber > 120) {
    ageError.textContent = "Please enter a realistic age (under 120).";
    ageUser.focus();
    return;
  }

  // On valid input, simulate phone call
  setTimeout(() => {
    window.location.href = "tel:+15558675309";
  }, 200);
});
