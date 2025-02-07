document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      let emailParams = {
        from_name: document.getElementById("name").value,
        form_phone: document.getElementById("phone").value,
        from_email: document.getElementById("email").value,
        form_subject: document.getElementById("project").value,
   
      };
  
      // Send email using Email.js
      emailjs.send("service_8oz0t7h", "template_exj8ro7", emailParams, "MQh1ddn1_MMHHd2XQ")
        .then(function (response) {
          alert("Your form has been submitted successfully!");
          document.getElementById("contactForm").reset(); // Reset form fields
        })
        .catch(function (error) {
          console.error("Error sending email:", error);
          alert("Oops! Something went wrong. Please try again.");
        });
    });
  });