export function concluiTarefa(p, botaoConcluir) {
    botaoConcluir.addEventListener("click", function() {
        p.classList.toggle("done");
    });
}