let imagemHeader = this.document.querySelector('.logo-header')
let imagemFooter = this.document.querySelector('.logo-footer')

var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

var caminhodaImagemFooter = isDarkMode ? './img/logo-footer-escuro.png' : './img/logo-footer-claro.png'
var caminhodaImagemHeader = isDarkMode ? './img/logo-header-escuro.png' : './img/logo-header-claro.png'
imagemFooter.src = caminhodaImagemFooter
imagemHeader.src = caminhodaImagemHeader