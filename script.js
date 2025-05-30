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

  // ✅ Success & Redirect (works in Chrome)
  if (confirm("Want to call Me?")) {
    setTimeout(() => {
      window.location.href = "tel:+15558675309";
    }, 200);
  }
});
