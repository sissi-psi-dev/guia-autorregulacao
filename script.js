function expandir(elemento) {

    document.querySelectorAll('.bloco').forEach(bloco => {
        if (bloco != elemento) {
            bloco.classList.remove('ativo')
            bloco.querySelector('p').textContent = bloco.dataset.letra
        }
    })

    const titulo = elemento.querySelector("p")

    if (elemento.classList.contains("ativo")) {
        titulo.textContent = elemento.dataset.letra
        elemento.classList.remove("ativo")
    } else {
        titulo.textContent = elemento.dataset.palavra
        elemento.classList.add("ativo")
    }
}

document.querySelectorAll('.bloco').forEach( bloco => {
    bloco.addEventListener('click', () => expandir(bloco))
})