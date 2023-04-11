/*==================== CONTACT FORM ====================*/ 

function sendEmail(){
    Email.send({
        SecureToken: "b5f1ffbe-42fd-4df6-be9b-deddf87c6041",
        To : 'solvingforindiagfg@gmail.com',
        From : 'solvingforindiagfg@gmail.com',
        Subject : "KhetiFy feed form",
        Body : "Name: "+document.getElementById("name").value
              +"<br> Email: "+document.getElementById("email").value
              +"<br> Phone: "+document.getElementById("phone").value
              +"<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}