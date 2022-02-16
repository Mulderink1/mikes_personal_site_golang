if (window.innerWidth > 600) {
  const modal = document.getElementsByClassName(
    "email-modal"
  )[0] as HTMLDivElement;
  const emailButton = document.getElementsByClassName(
    "email-button"
  )[0] as HTMLButtonElement;
  const emailSpan = document.getElementsByClassName(
    "email-span"
  )[0] as HTMLSpanElement;
  const footerEmailButton = document.getElementsByClassName(
    "footer-email-button"
  )[0] as HTMLButtonElement;
  const email: string = "mulderink.mike@gmail.com";
  const textElement: HTMLTextAreaElement = document.createElement("textarea");

  emailButton.onclick = () => {
    modal.style.display = "block";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  footerEmailButton.onclick = () => {
    modal.style.display = "block";
  };

  emailSpan.onclick = () => {
    document.body.appendChild(textElement);
    textElement.value = email;
    textElement.select();
    document.execCommand("copy");
    document.body.removeChild(textElement);
    alert("Copied to Clipboard");
  };
}
