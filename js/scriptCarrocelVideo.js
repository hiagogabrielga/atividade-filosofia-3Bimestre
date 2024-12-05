const subtitulos = [
    "Caleb é convidado para testar Ava.",
    "A relação entre Caleb, Ava e Nathan se aprofunda.",
    "parte 3",
    "parte 4",
    "A Linha Tênue Entre Realidade e Artificialidade.",
    "parte 6",
    "parte 7"
]

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.control.next');
const prevButton = document.querySelector('.control.prev');
const indicators = document.querySelectorAll('.indicator');
const info = document.querySelector('.info');
const subInfo = document.querySelector('.subInfo')

let currentSlide = 0;
const totalSlides = slides.length;

// Atualizar a exibição do carrossel
function updateCarousel() {
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    indicators.forEach((btn, index) => {
        btn.classList.toggle('active', index === currentSlide);
    });

    // Exibir informações do ato
    const currentAto = slides[currentSlide].dataset.ato;
    info.textContent = `${currentAto}:`;
    subInfo.textContent = `${subtitulos[currentSlide]}`
}

// Avançar para a próxima imagem
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

// Voltar para a imagem anterior
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Navegar para um slide específico ao clicar nos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Trocar automaticamente após alguns segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 7000);


if (window.innerWidth > 765) {
    updateCarousel();
}

function arrumarCores() {
    let imagemHeader = this.document.querySelector('.logo-header')
    let imagemFooter = this.document.querySelector('.logo-footer')
    let ancoraEscolhida = this.document.querySelector('#ancora-escolhida')
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    var nomeDaCor = isDarkMode ? 'White' : 'Black'
    var caminhodaImagemHeader = isDarkMode ? './img/logo-header-escuro.png' : './img/logo-header-claro.png'
    var caminhodaImagemFooter = isDarkMode ? './img/logo-footer-escuro.png' : './img/logo-footer-claro.png'
    if(window.scrollY <= 0){
        nomeDaCor = 'white' 
        caminhodaImagemHeader = './img/logo-header-escuro.png'
    }
    imagemHeader.src = caminhodaImagemHeader
    imagemFooter.src = caminhodaImagemFooter
    ancoraEscolhida.style.color = nomeDaCor
}


window.addEventListener("load", arrumarCores ())

window.addEventListener("scroll", function () {
    let header = document.querySelector('.header')
    let conteudo = document.querySelector('.div-logo-header')

    header.classList.toggle('rolagem', window.scrollY > 0)
    conteudo.classList.toggle('rolagem', window.scrollY > 100)

    arrumarCores()

})


