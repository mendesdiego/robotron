const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

function mostraTintas(operacao, controle) {
    const tinta = lista.querySelector("[data-tinta]");

    if (tinta === "Laranja") {
        tinta.style.display = "none";
    } else {
        tinta.style.display = "block";
    }
}