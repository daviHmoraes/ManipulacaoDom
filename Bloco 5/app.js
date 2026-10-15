import { concluiTarefa } from "./concluiTarefa.js";
import { deletaTarefa } from "./deletaTarefa.js";

const formulario = document.querySelector("form");
const nome = document.getElementById("nome");

const tarefa = document.getElementById("tarefa");
const listaTarefa = document.getElementById("lista");
const formularioTarefa = document.getElementById("formulario-tarefa");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nome.value.trim() === "") {
        alert("O nome não pode ser vazio!");
        return;
    }

    alert(`Formulário enviado! Obrigado ${nome.value}`);
});

formularioTarefa.addEventListener("submit", function(event) {
    event.preventDefault();

    if (tarefa.value.trim() === "") {
        alert("O nome da tarefa não pode ser vazio!");
        return;
    }

    const li = document.createElement("li");
    const p = document.createElement("p");

    const botaoConcluir = document.createElement("button");
    const botaoExcluir = document.createElement("button");

    p.textContent = tarefa.value;

    botaoConcluir.textContent = "Concluir";
    botaoConcluir.classList.add("botao-concluir");

    botaoExcluir.textContent = "Excluir";

    concluiTarefa(p, botaoConcluir);
    deletaTarefa(li, botaoExcluir);

    li.appendChild(p);
    li.appendChild(botaoConcluir);
    li.appendChild(botaoExcluir);

    li.classList.add("tarefa");

    listaTarefa.appendChild(li);

    tarefa.value = "";
    tarefa.focus();
});