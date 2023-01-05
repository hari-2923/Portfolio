// function sendMail( ){
//     var params = {
//         name: document. getElementById("name"). value, 
//         email: document. getElementById("email"). value,
//         subject: document. getElementById("subject"). value ,
//         message: document. getElementById("message"). value,
//     };
//     const serviceID = "service_fi5dvew"
// const templateID = "template_2gh7ssl"

// emailjs.send(serviceID, templateID, params). then((res) => {
//     document.getElementById("name").value = " ";
//     document.getElementById("email").value = " ";
//     document.getElementById("subject").value = " ";
//     document.getElementById("message").value = " ";
//     console.log(res);
//     alert("Your response has been sent successfully!");
// })

// .catch((err) =>console.log(err));

// }

function sendMail(){
    if(
        document.getElementById("name").value !=""
        && document.getElementById("email").value !=""
        && document.getElementById("message").value !=""){
            var params = {
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                message :document.getElementById("message").value
            };
            const serviceID = "service_fi5dvew"
            const templateID = "template_2gh7ssl"
            emailjs.send(serviceID,templateID,params)
            .then(
                res =>{
                    alert("your message sent succesfully");
                }
            )
            .catch((err) => console.log(err));
        }
        else{
            alert("Enter full details");
        }
}

