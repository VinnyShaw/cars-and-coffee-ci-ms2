// todo: index.html is linking to email.js correctly but no email received

console.log("This means email.js is linked correctly");

function sendMail(contactForm) {
  emailjs
    .send("gmail", "ms2", {
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
    );
  return false; // To block from loading a new page
}
console.log("This is after the emailjs function");

// todo: Go back thru emailjs vids and match my form to the one from and match emailjs template too and get it all working
// todo: perhaps look at combining first and last name fields for ease?
// todo: check the use of from in ci exampkle code for html and js
