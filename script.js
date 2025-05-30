const submitBtn = document.getElementById("submitBtn");
const nameUser = document.getElementById("name");
const ageUser = document.getElementById("age");

submitBtn.addEventListener("click", () => {
  const nameValue = nameUser.value.trim();
  const ageValue = ageUser.value.trim();
  const nameRegex = /^[A-Za-z\s'-]+$/;

  // Name validation
  if (nameValue === "") {
    alert("Enter Your Name");
    nameUser.focus();
    nameUser.value = "";
    return;
  }

  if (!nameRegex.test(nameValue)) {
    alert("Name should only contain letters (no numbers or symbols).");
    nameUser.focus();
    nameUser.value = "";
    return;
  }

  // Age validation
  const ageNumber = parseInt(ageValue, 10);

  if (isNaN(ageNumber)) {
    alert("Enter a valid age");
    ageUser.focus();
    ageUser.value = "";
    return;
  }

  if (ageNumber < 18) {
    alert("You must be at least 18 years old.");
    ageUser.focus();
    ageUser.value = "";
    return;
  }

  if (ageNumber > 120) {
    alert("Please enter a realistic age (under 120).");
    ageUser.focus();
    ageUser.value = "";
    return;
  }

  // ✅ Success & Redirect (works in Chrome)
  if (confirm("Want to call Me?")) {
    setTimeout(() => {
      window.location.href = "tel:+15558675309";
    }, 200);
  }
});
