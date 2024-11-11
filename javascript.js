const showBtn = document.querySelector(".change__btn");
const cardContainer = document.querySelector(".card__container");
const cardItem = cardContainer.querySelectorAll(".card__item");

// Переключение класса hidden для всех элементов начиная с 6-го
function toggleHiddenItems() {
  for (let i = 6; i < cardItem.length; i++) {
    cardItem[i].classList.add("hidden");
  }
}

// Обработчик события для кнопки
showBtn.addEventListener("click", function () {
  toggleHiddenItems();
  
  // Меняем текст и класс кнопки в зависимости от состояния элементов
  if (cardItem[6].classList.contains("hidden")) {
    showBtn.textContent = "Показать все";
    showBtn.classList.remove("revert");
  } else {
    showBtn.textContent = "Скрыть";
    showBtn.classList.add("revert");
  }
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
