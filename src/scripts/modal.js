const modals = document.querySelectorAll('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const viewCardButton = document.querySelector('.card__image');

editProfileButton.addEventListener('click', function(evt){
  console.log(evt);
  const editProfileModal = document.querySelector('.popup_type_edit');
  editProfileModal.classList.add('popup_is-opened');
})

addCardButton.addEventListener('click', function(){
  const addCardModal = document.querySelector('.popup_type_new-card');
  addCardModal.classList.add('popup_is-opened');
})

//добавляет обработчик события на закрытия модального окна всем модальным окнам

modals.forEach(modal => {
  const closeButton = modal.querySelector('.popup__close');
  closeButton.addEventListener('click', function(){
    console.log(modal.classList)
    modal.classList.remove('popup_is-opened');
  })
})
