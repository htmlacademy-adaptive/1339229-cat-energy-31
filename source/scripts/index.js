/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.nav-mobile');
const navToggle = document.querySelector('.nav-mobile__toggle');

navMain.classList.remove('nav-mobile--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav-mobile--off')) {
    navMain.classList.remove('nav-mobile--off');
    navMain.classList.add('nav-mobile--on');
  } else {
    navMain.classList.add('nav-mobile--off');
    navMain.classList.remove('nav-mobile--on');
  }
});
