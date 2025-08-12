function sendEmail(event) {
    event.preventDefault();

    // Get selected radio button value
    const duration = document.querySelector('input[name="button"]:checked');
    const durationValue = duration ? duration.value : "";

    const data = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        number: document.getElementById("number").value,
        date: document.getElementById("date").value,
        duration: durationValue,
        message: document.getElementById("message").value
    };

    emailjs.send("service_hm3yljq", "template_owod3ln", data)
        .then(function (res) {
            alert("SUCCESS");
            document.querySelector("form").reset(); // Clear the form
        }, function (error) {
            alert("FAILED TO SEND\n" + JSON.stringify(error));
        });
}
