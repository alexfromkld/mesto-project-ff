import { initialCards } from "./cards";
import { addCardForm, editProfileForm, addNewCard, editProfile } from "./forms";
import { makeCard, deleteCard, likeCard } from "./cards";
import { openModal, closeModal } from "./modal";
import { editProfileButton, editProfileModal, addCardButton, addNewCardModal } from "./modal";

const modals = document.querySelectorAll('.popup');
const imagePopup = document.querySelector('.popup_type_image');
const imageModal = document.querySelector('.popup_type_image');
const imageElement = imageModal.querySelector('.popup__image');
const imageDescription = imageModal.querySelector('.popup__caption');


// функция которая открывает модальное окно с нужным нам изображением и описанием

export function openModalWithImageAndCaption(imageUrl, imageCaption) {
  imageElement.src = imageUrl;
  imageElement.alt = imageCaption;
  imageDescription.textContent = imageCaption;
  openModal(imagePopup);
}

// добавляет обработчик события на закрытие модального окна всем модальным окнам

modals.forEach(modal => {
  modal.classList.add('popup_is-animated');
  const form = modal.querySelector('form')
  const closeButton = modal.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModal('.popup_is-opened', form))
})

// @todo: Темплейт карточки

export const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

export const cardsContainer = document.querySelector('.places__list')

// @todo: Вывести карточки на страницу

initialCards.forEach(item => cardsContainer.append(makeCard(item, deleteCard, likeCard, openModalWithImageAndCaption)));

// добавления обработчика на форму для добавления новой карточки

addCardForm.addEventListener('submit', (evt) => addNewCard(evt));

//добавления обработчика на форму редактирование профиля

editProfileForm.addEventListener('submit', (evt) => editProfile(evt));

// открываем модальное окно для редактирования профиля

editProfileButton.addEventListener('click', () => openModal(editProfileModal, editProfileForm));

// открываем модальное окно для добавления новой карточки

addCardButton.addEventListener('click', () => openModal(addNewCardModal))

