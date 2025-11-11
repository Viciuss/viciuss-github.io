document.addEventListener("DOMContentLoaded", () => {
    const alturaInicial = 100;
    const botoes = document.querySelectorAll(".ReadMore");

    botoes.forEach((btn) => {
        const artigo = btn.closest(".projeto");
        const descProjeto = artigo.querySelector(".descricao-projeto");
        const overflow = artigo.querySelector(".overflow");

        descProjeto.style.maxHeight = `${alturaInicial}px`;
        descProjeto.style.overflow = "hidden";

        btn.addEventListener("click", () => {
            const state = btn.dataset.state;

            if (state === "more") {
                descProjeto.style.maxHeight = `${descProjeto.scrollHeight}px`;
                btn.dataset.state = "less";
                btn.textContent = "Mostrar menos";
                overflow.dataset.state = "visible";
            } else {
                descProjeto.style.maxHeight = `${alturaInicial}px`;
                btn.dataset.state = "more";
                btn.textContent = "Mostrar mais";
                overflow.dataset.state = "hidden";
            }
        });
    });
});
