window.addEventListener("scroll", function () {
    let header = document.querySelector('.header')
    let ancoraEscolhida = this.document.querySelector('#ancora-escolhida')
    let conteudo = document.querySelector('.div-logo-header')
    header.classList.toggle('rolagem', window.scrollY > 0)
    if (window.innerWidth > 765) {
        if (window.scrollY > 0) {
            ancoraEscolhida.style.color = 'black'
        } else{
            ancoraEscolhida.style.color = 'rgb(255, 255, 255)'
        }
    }

    conteudo.classList.toggle('rolagem', window.scrollY > 100)
})
