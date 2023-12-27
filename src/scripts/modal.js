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

editProfileButton.addEventListener('click', function() {
  openModalHandle('.popup_type_edit');
})

addCardButton.addEventListener('click', function() {
  openModalHandle('.popup_type_new-card');
})

cards.forEach(card => {
  const cardImage = card.querySelector('.card__image');
  cardImage.addEventListener('click', function(evt) {
    const imageUrl = evt.currentTarget.src;
    const imageCaption = evt.currentTarget.alt;
    openModalWithImageAndCaption(imageUrl, imageCaption);
  })
})

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
