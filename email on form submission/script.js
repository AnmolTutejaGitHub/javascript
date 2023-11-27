//website smtpjs
function sendEmail(){


    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "tutejaanmol0@gmail.com",
      Password : "",
      To :  document.getElementById("email").value,
      From :"tutejaanmol0@gmail.com",
      Subject : "Your form has been submitted",
      Body : `Hey ${document.getElementById("name").value} we will soon connect with you on  ${document.getElementById("phone").value} `
  }).then(
    message => alert(message)
  );
  }
  