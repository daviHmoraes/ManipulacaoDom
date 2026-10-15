export function deletaTarefa(li, botaoExcluir) {
    botaoExcluir.addEventListener("click", function() {
        li.remove();
    });
}