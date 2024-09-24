// `Fullscreen API` to open any element in full-screen mode.

const fullScreenButton = document.getElementById('button');
const element = document.getElementById('someElement');

fullScreenButton.addEventListener('click', () => {
  element.requestFullscreen();
});
