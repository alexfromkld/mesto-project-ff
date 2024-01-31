import { initialCards } from "./cards";
import { addCardForm, editProfileForm, addNewCard, editProfile, nameInput, descriptionInput } from "./forms";
import { makeCard, deleteCard, likeCard } from "./card";
import { openModal, closeModal } from "./modal";
import { editProfileButton, editProfileModal, addCardButton, addNewCardModal } from "./modal";
import { clearValidation, enableValidation } from "./validation";

const modals = document.querySelectorAll('.popup');
const imagePopup = document.querySelector('.popup_type_image');
const imageElement = imagePopup.querySelector('.popup__image');
const imageDescription = imagePopup.querySelector('.popup__caption');
const validationConfig = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__form-error_message_active'
}

// функция открытия попапа для редактирования профайла, которая подставляет в инпуты текущие данные

function openEditProfilePopup(form) {
  if(form) {
    form.name.value = nameInput.textContent;
    form.description.value = descriptionInput.textContent;
    openModal(editProfileModal);
    clearValidation(form, validationConfig);
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

// @todo: Вывести карточки на страницу

initialCards.forEach(item => cardsContainer.append(makeCard(item, deleteCard, likeCard, openModalWithImageAndCaption)));

// добавления обработчика на форму для добавления новой карточки

addCardForm.addEventListener('submit', (evt) => {
  addNewCard(evt)
  clearValidation(evt.srcElement, validationConfig);
});

//добавления обработчика на форму редактирование профиля

editProfileForm.addEventListener('submit', (evt) => editProfile(evt));

// открываем модальное окно для редактирования профиля

//editProfileButton.addEventListener('click', () => openModal(editProfileModal, editProfileForm));
editProfileButton.addEventListener('click', () => openEditProfilePopup(editProfileForm));

// открываем модальное окно для добавления новой карточки

addCardButton.addEventListener('click', () => openModal(addNewCardModal));

enableValidation(validationConfig);

