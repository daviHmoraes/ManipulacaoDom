export function deletaTarefa(li, botao) {
    botao.addEventListener("click", function() {
        li.remove();
    });
}