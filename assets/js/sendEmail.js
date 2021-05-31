// todo: index.html is linking to email.js correctly but no email received

console.log("This means email.js is linked correctly");

function sendMail(contactForm) {
  console.log("This means emailjs.send function called");
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
    );
  return false; // To block from loading a new page
}
console.log("This is after the emailjs function");

// todo: Why does this work offline but not live???
