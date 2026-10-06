const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const itemId = document.getElementById("item");
const itemClass = document.querySelector(".item");

const tarefa = document.getElementById("tarefa");
const listaTarefa = document.getElementById("lista");
const formularioTarefa = document.getElementById("formulario-tarefa");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nome.value.trim() === "") {
        alert("O nome não pode ser vazio!");
    } else {
        alert(`Formulário Enviado!, Obrigado ${nome.value}`);
    }
});

formularioTarefa.addEventListener("submit", function(event) {
    event.preventDefault();

    if (tarefa.value.trim() === "") {
        alert("O nome não pode ser vazio!");
        return;
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    const botao = document.createElement("button");

    p.textContent = tarefa.value;

    botao.textContent = "Excluir";

    botao.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(p);
    li.appendChild(botao);

    li.classList.add("tarefa");

    listaTarefa.appendChild(li);

    tarefa.value = "";
});