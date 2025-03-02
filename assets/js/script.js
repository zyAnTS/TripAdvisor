document.addEventListener("DOMContentLoaded", () => {
  const formButton = document.getElementById("form-button");
  const formulaire = document.querySelector(".formulaire");
  const open = document.getElementById("btn-show-form");
  const confirmation = document.querySelector(".confirmation-await");
  const crossFormulaire = document.getElementById("close-formulaire");
  const crossConfirmation = document.getElementById("close-confirmation");

  // annuler le comportement par défaut du formulaire
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const confirmation = document.querySelector(".confirmation-await");
    const formulaire = document.querySelector(".formulaire");

    // receuillir les infos du formulaire

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

  formButton.addEventListener("click", () => {
    formulaire.classList.add("hide");
    confirmation.classList.add("confirmation");
    console.log("Formulaire envoyé");
  });

  // ouvrir le formulaire

  open.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("hide");
    formulaire.classList.remove("hide");
    confirmation.classList.remove("confirmation");
  });

  // fermer le formulaire

  crossFormulaire.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("hide");
  });

  // fermer la confirmation

  crossConfirmation.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("hide");
  });
});
