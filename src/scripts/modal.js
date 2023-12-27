const modals = document.querySelectorAll('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const cards = document.querySelectorAll('.card');

//функция открытия модальных окон и добавление слушвтелей

function openModalHandle(modalSelector) {
  const modal = document.querySelector(modalSelector);
  if (modal) {
    modal.classList.add('popup_is-opened');
    modal.addEventListener('click', closeModalOverlay);
    document.addEventListener('keydown', closeModalOnEsc);
  }
}

//функция закрытия модальных окон и удаления слушателей

function closeModalHandle(modalSelector) {
  const modal = document.querySelector(modalSelector);
  if (modal) {
    modal.classList.remove('popup_is-opened');
    modal.removeEventListener('click', closeModalOverlay);
    document.removeEventListener('keydown', closeModalOnEsc);
  }
}

//закрытие модального окна кликом по оверлею

function closeModalOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModalHandle('.popup_is-opened');
  }
}

//закрытик мадального окна клавишей Esc

function closeModalOnEsc(evt) {
  if(evt.key === 'Escape') {
    closeModalHandle('.popup_is-opened');
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

//перебираем массив карточек и каждой добавляем обработчик откртыия модального окна
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
  modal.classList.add('popup_is-animated');
  const closeButton = modal.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModalHandle('.popup_is-opened'))
})
