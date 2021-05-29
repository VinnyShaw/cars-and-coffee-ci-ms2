// todo: index.html is linking to email.js correctly but no email received
console.log("This means email.js is linked correctly");
function sendMail(contactForm) {
  emailjs
    .send("gmail", "ms2", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      from_subject: contactForm.projectsummary.value,
      from_message: contactForm.message.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}
console.log("This is after the emailjs function");

// todo: Go back thru emailjs vids and match my form to theit from and match emailjs template too and get it all working
// todo: perhaps look at combining first and last name fields for ease?
