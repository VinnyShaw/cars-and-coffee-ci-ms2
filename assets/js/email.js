// todo: change the gmail and rosie text
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
