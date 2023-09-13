function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//formulaire
function validate() {
  let firstNameInput = document.getElementById("first");
  let lastNameInput = document.getElementById("last");
  let emailInput = document.getElementById("email");
  let quantityInput = document.getElementById("quantity");
  let locationInputs = document.querySelectorAll('input[name="location"]');
  let checkbox1Input = document.getElementById("checkbox1");

  let firstName = firstNameInput.value.trim();
  let lastName = lastNameInput.value.trim();
  let email = emailInput.value.trim();
  let quantity = quantityInput.value.trim();

  // Réinitialiser les messages d'erreur
  clearErrors();

let isValid = true;

  if (firstName === "" || firstName.length < 2) {
    displayError(
      firstNameInput,
      "Veuillez entrer 2 caractères ou plus pour le prénom."
    );
    isValid = false;
  }

  if (lastName === "" || lastName.length < 2) {
    displayError(
      lastNameInput,
      "Veuillez entrer 2 caractères ou plus pour le nom."
    );
    isValid = false;
  }

  if (!isValidEmail(email)) {
    displayError(emailInput, "Veuillez entrer une adresse e-mail valide.");
    isValid = false;
  }

  if (quantity === "" || isNaN(quantity)) {
    displayError(quantityInput, "Veuillez entrer un nombre valide.");
    isValid = false;
  }

 let locationSelected = false;
  locationInputs.forEach(function (locationInput) {
    if (locationInput.checked) {
      locationSelected = true;
    }
  });

  if (!locationSelected) {
    displayError(locationInputs[0], "Vous devez choisir une option.");
    isValid = false;
  }

  if (!checkbox1Input.checked) {
    displayError(
      checkbox1Input,
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    isValid = false;
  }
  function hideConfirmationMessage() {
 let confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "none";
  }

  if (isValid) {
    // Validation réussie, afficher un message de confirmation
    var confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";

    // Cacher le formulaire
    let form = document.getElementById("reserve-form");
    form.style.display = "none";

    return false; // Empêche la soumission du formulaire
  }

  return isValid;
}

function isValidEmail(email) {
  // Utilisez une expression régulière pour valider l'e-mail.
 let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(inputElement, errorMessage) {
  // Crée un élément span pour afficher l'erreur
  let errorElement = document.createElement("span");
  errorElement.className = "error-message";
  errorElement.innerHTML = errorMessage;

  // Ajoute l'élément span après l'élément d'entrée
  inputElement.parentNode.appendChild(errorElement);
}

function clearErrors() {
  // Supprime tous les messages d'erreur
  let errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  });
}
