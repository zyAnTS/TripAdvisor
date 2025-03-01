document.addEventListener("DOMContentLoaded", () => {
  // annuler le comportement par défaut du formulaire
  document.querySelector("form")?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("prenom").value;
    const lastName = document.getElementById("nom").value;
    // const email = document.getElementById("mail").value;
    const email = "zyan01@hotmail.com";
    const subject = document.getElementById("sujet").value;
    const message = document.getElementById("message").value;

    const response = await axios.post(
      "https://site--mailersend--mz8pkhlfl2x7.code.run/form",
      {
        firstName,
        lastName,
        email,
        subject,
        message,
      }
    );

    console.log(response.data);
  });

  // Click sur envoyer le formulaire
  const formButton = document.getElementById("form-button");

  formButton.addEventListener("click", () => {
    const titleToModify = document.getElementById("form-title");
    titleToModify.textContent = "Formulaire envoyé !";
    titleToModify.classList.add("send");
    console.log("Formulaire envoyé");
  });

  // ouvrir le formulaire
  const open = document.getElementById("btn-show-form");

  open.addEventListener("click", (event) => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("hide");
  });

  // fermer le formulaire
  const cross = document.getElementById("close");

  cross.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("hide");
  });
});
