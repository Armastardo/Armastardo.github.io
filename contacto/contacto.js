$("#contact-form").on("submit", function(event) {
    submitForm();
    return false;
});


function submitForm() {
    var name = $("#name").val();
    var motive = $("#contact-motive").val();
    var method = $("#contact-method").val();
    var info = $("#contact-info").val();
    var message = $("#message").val();
    $.ajax({
        type: "POST",
        url: "https://hooks.zapier.com/hooks/catch/5396459/ok5lqua",

        data: "name=" + name + "&motive=" +motive + "&info=" + info + "&message=" + message,
        success: function(text) {
            console.log(text);
            console.log(text.status);
            if (text.status == "success") {
                formSuccess();
            } else {
                formError();
                console.log(text);
            }
        }
    });
}
function formSuccess() {
    console.log("mensaje enviado")
    document.getElementById("contact-form").reset();
    document.getElementById("message-status").innerHTML = "Su mensaje se envió correctamente"
}
function formError() {
    console.log("error")
}