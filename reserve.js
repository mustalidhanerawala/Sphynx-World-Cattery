const form = document.getElementById("reserveForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const breed = document.getElementById("breed").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
`Hello, my name is ${name}.

I am interested in reserving a ${breed} kitten.

Phone: ${phone}
Email: ${email}

Message:
${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
        `https://wa.me/16312901650?text=${encodedMessage}`,
        "_blank"
    );

});