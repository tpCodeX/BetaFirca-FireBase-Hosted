import { regDonante } from "./firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  const treeInput = document.getElementById("tree-input");
  const totalAmount = document.getElementById("total-amount");
  const donateButton = document.getElementById("donate-button");
  const bankInfo = document.getElementById("bank-info");
  const donationForm = document.getElementById("donation-form");



  

  treeInput.addEventListener("input", function () {
    const numTrees = parseInt(treeInput.value);
    const treePrice = 1500;
    const donationTotal = numTrees * treePrice;

    totalAmount.textContent = `Total a Abonar: $${donationTotal} Pesos Argentinos`;
  });


  donationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = donationForm["donation-name"].value
    const dni = donationForm["donation-dni"].value
    const email = donationForm["donation-email"].value

    regDonante(nombre, dni, email)

    bankInfo.style.display = "block";
    
    console.log("Ready");
  });



});

// donateButton.addEventListener("click", function() {
//     // const nameInput = document.getElementById("donation-name");
//      //const emailInput = document.getElementById("donation-email");

//      //if (nameInput.value && emailInput.checkValidity()) {
//          // Mostrar la información de la cuenta bancaria
//      //} else {
//        //  alert("Por favor, completa tu nombre y correo electrónico antes de continuar.");
//     // }
//  });
