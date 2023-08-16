document.addEventListener("DOMContentLoaded", function () {
    function validateForm() {
      const fullName = document.getElementById("fullName").value.trim();
      const mobileNumber = document.getElementById("mobileNumber").value.trim();
      const email = document.getElementById("email").value.trim();
      const confirmEmail = document.getElementById("confirmEmail").value.trim();
  
      const continueButton = document.getElementById("continueButton");
  
      if (fullName !== "" && mobileNumber !== "" && email !== "" && confirmEmail !== "" && email === confirmEmail) {
        continueButton.disabled = false;
      } else {
        continueButton.disabled = true;
      }
    }
  
    document.getElementById("fullName").addEventListener("input", validateForm);
    document.getElementById("mobileNumber").addEventListener("input", validateForm);
    document.getElementById("email").addEventListener("input", validateForm);
    document.getElementById("confirmEmail").addEventListener("input", validateForm);
  
    // Redirect to the Payment page when the "Continue with purchase" button is clicked
    document.getElementById("continueButton").addEventListener("click", function() {
      window.location.href = "payment.html"; // Change to the actual Payment page URL
    });
  
    // Retrieve data from local storage and update the summary table (if available)
    const storedSummaryDate = localStorage.getItem("summaryDate");
    const storedSummaryTime = localStorage.getItem("summaryTime");
    const storedSummaryDuration = localStorage.getItem("summaryDuration");
    const storedSummaryTickets = localStorage.getItem("summaryTickets");
    const storedSummaryTotal = localStorage.getItem("summaryTotal");
  
    if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
      document.getElementById("summaryDate").textContent = storedSummaryDate;
      document.getElementById("summaryTime").textContent = storedSummaryTime;
      document.getElementById("summaryDuration").textContent = storedSummaryDuration;
      document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
      document.getElementById("summaryTotal").textContent = storedSummaryTotal;
    }
  
    // Enable or disable the "Continue with purchase" button based on form validation
    validateForm();
  });