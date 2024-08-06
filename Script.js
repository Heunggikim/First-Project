function sendMail()
{
    var params ={

        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

        emailjs.send("service_l8ac4v2","template_mn1te6r", params).then(function (res) {
        alert("Success !" + res.status);
    })
}


