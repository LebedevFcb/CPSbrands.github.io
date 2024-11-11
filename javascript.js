document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.querySelector('.change__btn');
  const cardContainer = document.querySelector('.card__container');
  const cardItems = cardContainer.querySelectorAll('.card__item');
  const icon = showBtn.querySelector('.icon'); // Иконка кнопки

  // Скрываем элементы начиная с 6-го
  for (let i = 6; i < cardItems.length; i++) {
    cardItems[i].classList.add("hidden");
  }

  // Обработчик события для кнопки
  showBtn.addEventListener("click", function () {
    // Переключаем видимость элементов
    for (let i = 6; i < cardItems.length; i++) {
      cardItems[i].classList.toggle("hidden");
    }
    
    // Обновляем текст и поворачиваем иконку
    if (cardItems[6].classList.contains("hidden")) {
      showBtn.textContent = "Показать все";
      showBtn.classList.remove("revert");
      icon.style.transform = "rotate(0deg)";
    } else {
      showBtn.textContent = "Скрыть";
      showBtn.classList.add("revert");
      icon.style.transform = "rotate(180deg)";
    }
  });
});



var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
