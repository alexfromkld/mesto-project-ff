const modals = document.querySelectorAll('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const cards = document.querySelectorAll('.card');

//функция открытия модальных окон

function openModalHandle(modalSelector) {
  const modal = document.querySelector(modalSelector);
  if (modal) {
    modal.classList.add('popup_is-opened');
  }
}

//открываем модальное окно для редактирования профиля

editProfileButton.addEventListener('click', function() {
  openModalHandle('.popup_type_edit');
})

//открываем модальное окно для добавления новой карточки

addCardButton.addEventListener('click', function() {
  openModalHandle('.popup_type_new-card');
})

//перебираем массив карточек и каждой добавляе обработчик откртыия модального окна
//паралельно передаём изображения и описание из currentTarget

cards.forEach(card => {
  const cardImage = card.querySelector('.card__image');
  cardImage.addEventListener('click', function(evt) {
    const imageUrl = evt.currentTarget.src;
    const imageCaption = evt.currentTarget.alt;
    openModalWithImageAndCaption(imageUrl, imageCaption);
  })
})

//функция которая открывает модальное окно с нужным нам изображением и описанием

function openModalWithImageAndCaption(imageUrl, imageCaption) {
  const imageModal = document.querySelector('.popup_type_image');
  const imageElement = imageModal.querySelector('.popup__image');
  const imageDescription = imageModal.querySelector('.popup__caption');
  imageElement.src = imageUrl;
  imageDescription.textContent = imageCaption;
  openModalHandle('.popup_type_image');
}


//добавляет обработчик события на закрытия модального окна всем модальным окнам

modals.forEach(modal => {
  const closeButton = modal.querySelector('.popup__close');
  closeButton.addEventListener('click', function() {
    modal.classList.remove('popup_is-opened');
  })
})

//@todo закрытия окна по клику на overlay и Esc
