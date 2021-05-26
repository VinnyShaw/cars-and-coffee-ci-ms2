// todo: index.html is linking to email.js correctly but no email received
console.log("This means email.js is linked correctly");
function sendMail(contactForm) {
  emailjs
    .send("gmail", "ms2", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      project_request: contactForm.projectsummary.value,
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
// todo: Go back thru emailjs vids and match my form to theit from and match emailjs template too and get it all working
// todo: perhaps look at combining first and last name fields for ease?
