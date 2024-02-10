import { addCardForm, editProfileForm, addNewCard, editProfile, nameInput, descriptionInput, changeAvatarForm, editUserAvatar, userAvatar } from "./forms";
import { makeCard, deleteCard, likeCard } from "./card";
import { openModal, closeModal } from "./modal";
import { editProfileButton, editProfileModal, addCardButton, addNewCardModal, changeAvatarModal, changeAvatarButton } from "./modal";
import { clearValidation, enableValidation, validationConfig } from "./validation";
import { getInititalCards, getUserData } from "./api";

export let userData;
export let cardsList;

// получаю информацию о пользователе и вывожу карточки на страницу
Promise.all([getUserData(), getInititalCards()])
  .then(([data, cards]) => {
    userData = data;
    cardsList = cards;
    nameInput.textContent = data.name;
    descriptionInput.textContent = data.about;
    userAvatar.style.backgroundImage = `url('${data.avatar}')`;
    cards.forEach(card => {
      cardsContainer.append(makeCard(card, data, deleteCard, likeCard, openModalWithImageAndCaption))
    })
  })
  .catch(err => console.log(err))

const modals = document.querySelectorAll('.popup');
const imagePopup = document.querySelector('.popup_type_image');
const imageElement = imagePopup.querySelector('.popup__image');
const imageDescription = imagePopup.querySelector('.popup__caption');

// функция открытия попапа для редактирования профайла, которая подставляет в инпуты текущие данные

function openEditProfilePopup(form) {
  if(form) {
    form.name.value = nameInput.textContent;
    form.description.value = descriptionInput.textContent;
    clearValidation(editProfileModal, validationConfig);
    openModal(editProfileModal);
  }
}

// функция которая открывает модальное окно с нужным нам изображением и описанием

export function openModalWithImageAndCaption(imageUrl, imageCaption) {
  imageElement.src = imageUrl;
  imageElement.alt = imageCaption;
  imageDescription.textContent = `Фото города ${imageCaption}`;
  openModal(imagePopup);
}

// добавляет обработчик события на закрытие модального окна всем модальным окнам

modals.forEach(modal => {
  modal.classList.add('popup_is-animated');
  const closeButton = modal.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModal(modal))
})

// @todo: Темплейт карточки

export const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

export const cardsContainer = document.querySelector('.places__list')

// добавления обработчика на форму для добавления новой карточки

addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addNewCard(evt);
});

//добавления обработчика на форму редактирование профиля

editProfileForm.addEventListener('submit', (evt) => {
  editProfile(evt, nameInput, descriptionInput);
  getUserData()
    .then(res => {
      nameInput.textContent = res.name;
      descriptionInput.textContent = res.about;
    })
    .catch(err => console.log(err))
});

//добавления обработчика на форму изменения аватара

changeAvatarForm.addEventListener('submit', (evt) => {
  clearValidation(evt.srcElement, validationConfig)
  editUserAvatar(evt);
  getUserData()
    .then(res => {
      userAvatar.style.backgroundImage = `url('${res.avatar}')`;
    })
    .catch(err => console.log(err))
})

// открываем модальное окно для редактирования профиля

editProfileButton.addEventListener('click', () => {
  openEditProfilePopup(editProfileForm);
});

// открываем модальное окно для добавления новой карточки

addCardButton.addEventListener('click', () => {
  clearValidation(addCardForm, validationConfig)
  openModal(addNewCardModal)
});

//открываем модальное окно для смены аватара

changeAvatarButton.addEventListener('click', () => openModal(changeAvatarModal))

enableValidation(validationConfig);

