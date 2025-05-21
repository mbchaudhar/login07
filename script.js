document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector("button[type='submit']");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
  
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form submission (optional if not handling real login)
  
      // Clear input fields
      emailInput.value = "";
      passwordInput.value = "";
    });
  });