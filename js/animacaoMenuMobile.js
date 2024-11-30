var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-menu'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './js/AnimationMenu.json'
  });

  var menuMobileContainer = document.getElementById('nav-mobile');
  var animationContainer = document.getElementById('lottie-animation-menu');
  var clickCount = 0;

  animation.setSpeed(2);

  animationContainer.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
      animation.playSegments([0, 70], true);
      menuMobileContainer.style.left = '5px'; // Mostra o menu
    } else if (clickCount === 2) {
      animation.playSegments([70, 140], true);
      menuMobileContainer.style.left = '-300px'; // Esconde o menu
      clickCount = 0;
    } else {
      animation.goToAndStop(70, true);
    }
  });