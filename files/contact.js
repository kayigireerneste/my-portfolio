const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Create email body
  var body = "Name: " + name + "\n";
  body += "Email: " + email + "\n";
  body += "Phone: " + phone + "\n";
  body += "Message: " + message;

  // Configure SMTPJS with your email settings
  Email.send({
    SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: "kayigireerneste@gmail.com",
    From: email,
    Subject: "Contact Form Submission",
    Body: body
  }).then(function(message) {
    // Email sent successfully
    alert("Thank you! Your message has been sent.");

    // Reset the form
    document.getElementById("contactForm").reset();
  }).catch(function(error) {
    // An error occurred while sending the email
    console.log(error);
    alert("Oops! Something went wrong. Please try again later.");
  });
});