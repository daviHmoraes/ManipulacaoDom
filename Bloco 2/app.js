const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const itemId = document.getElementById("item");
const itemClass = document.querySelector(".item");
const listaItens = document.querySelectorAll("ul");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if(nome.value.trim() === "") {
        alert("O nome não pode ser vazio!");
    } else {
        alert(`Formulário Enviado!, Obrigado ${nome.value}`);
    }
});

console.log(formulario);
console.log(itemId);
console.log(itemClass);
console.log(listaItens);