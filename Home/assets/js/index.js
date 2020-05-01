if (window.innerWidth > 600) {
    var modal_1 = document.getElementsByClassName("email-modal")[0];
    var emailButton = document.getElementsByClassName("email-button")[0];
    var emailSpan = document.getElementsByClassName("email-span")[0];
    var footerEmailButton = document.getElementsByClassName("footer-email-button")[0];
    var email_1 = "mulderink.mike@gmail.com";
    var textElement_1 = document.createElement("textarea");
    emailButton.onclick = function () {
        modal_1.style.display = "block";
    };
    window.onclick = function (event) {
        if (event.target == modal_1) {
            modal_1.style.display = "none";
        }
    };
    footerEmailButton.onclick = function () {
        modal_1.style.display = "block";
    };
    emailSpan.onclick = function () {
        document.body.appendChild(textElement_1);
        textElement_1.value = email_1;
        textElement_1.select();
        document.execCommand("copy");
        document.body.removeChild(textElement_1);
        alert("Copied to Clipboard");
    };
}
