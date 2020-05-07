"use strict";

$(document).ready(() => {
  
  $('.header__btn').click(() => {
    $('.overlay').show(300);
  });

  $('.popup__close-btn').click( () => {
    $('.overlay').hide(300);
  });
});


window.onload = () => {

  const options = {
    // родитель целевого элемента - область просмотра
    root: null,
    // без отступов
    rootMargin: '0px',
    // процент пересечения - половина изображения
    threshold: 0.5
  };

    // создаем наблюдатель
  const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        const animateStart = entry.target;
        // выводим информацию в консоль - проверка работоспособности наблюдателя
        // меняем фон контейнера
        animateStart.style.animationPlayState = 'running';
        // прекращаем наблюдение
        observer.unobserve(animateStart);
      }
    });
  }, options);

    // с помощью цикла следим за всеми нужными элиментами
  const arr = document.querySelectorAll('.animate');
  arr.forEach(i => {
    observer.observe(i);
  });


  const sliderBtnLeft = document.querySelector('.slider__btn--left'),
    sliderBtnRight = document.querySelector('.slider__btn--right'),
    sliderFullImg = document.querySelector('.slider__full-img'),
    img1 = document.querySelector('#img-1'),
    img2 = document.querySelector('#img-2'),
    img3 = document.querySelector('#img-3'),
    img4 = document.querySelector('#img-4');
  
  let slideId = 2,
    maxSlider = 4;
  
  console.dir(img1.style.background);
  
  sliderBtnLeft.addEventListener('click', () => {
    if (slideId > 1) {
      document.querySelector(`#img-${slideId}`).classList.remove(`active`);
      slideId--;
      document.querySelector(`#img-${slideId}`).classList.add(`active`);
    }
    sliderFullImg.style.backgroundImage = `url(../img/production/img${slideId}.jpg)`;
  });

  sliderBtnRight.addEventListener('click', () => {
    if (slideId < 4) {
      document.querySelector(`#img-${slideId}`).classList.remove(`active`);
      slideId++;
      document.querySelector(`#img-${slideId}`).classList.add(`active`);
    }
    sliderFullImg.style.backgroundImage = `url(../img/production/img${slideId}.jpg)`;
  });


};