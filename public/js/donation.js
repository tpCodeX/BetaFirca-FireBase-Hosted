//Funcion del contador de la seccion donaciones.


document.addEventListener("DOMContentLoaded", function() {
    const treeInput = document.getElementById("tree-input");
    const totalAmount = document.getElementById("total-amount");
    const donateButton = document.getElementById("donate-button");
        const bankInfo = document.getElementById("bank-info");
    
    
    treeInput.addEventListener("input", function() {
        const numTrees = parseInt(treeInput.value);
        const treePrice = 1000;
        const donationTotal = numTrees * treePrice;
        
        totalAmount.textContent = `Total a Abonar: $${donationTotal} Pesos Argentinos`;

        
    });

    donateButton.addEventListener("click", function() {
        const nameInput = document.getElementById("donation-name");
        const emailInput = document.getElementById("donation-email");

        if (nameInput.value && emailInput.checkValidity()) {
            // Mostrar la información de la cuenta bancaria
            bankInfo.style.display = "block";
        } else {
            alert("Por favor, completa tu nombre y correo electrónico antes de continuar.");
        }
    });
});

