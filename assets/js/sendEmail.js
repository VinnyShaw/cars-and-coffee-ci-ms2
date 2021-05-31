// Console log to show files correctly linked
console.log("This means sendEmail.js is linked correctly");
// Function to send the contact form fields contest to the site owner via emailjs
function sendMail(contactForm) {
  emailjs.send("gmail", "ms2", {
    "name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "subject": contactForm.subject.value,
    "message": contactForm.message.value,
  })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    )
    .then(
      function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('emailaddress').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
      }
    );
  return false; // To block from loading a new page
}
