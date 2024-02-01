import { deleteCard, likeCard, makeCard } from "./card";
import { cardsContainer } from "./index";
import { closeModal } from './modal';
import { openModalWithImageAndCaption } from "./index";
import { clearValidation } from "./validation";

export const addCardForm = document.forms.new_place;
export const editProfileForm = document.forms.edit_profile;
export const nameInput = document.querySelector('.profile__title');
export const descriptionInput = document.querySelector('.profile__description');
const addCardModal = document.querySelector('.popup_type_new-card')
const editProfileModal = document.querySelector('.popup_type_edit')

export function addNewCard(evt) {
  evt.preventDefault();

  const newCardData = {
    name: addCardForm.elements.place_name.value,
    link: addCardForm.elements.link.value
  }

  const newCard = makeCard(newCardData, deleteCard, likeCard, openModalWithImageAndCaption);
  addCardForm.reset();
  cardsContainer.prepend(newCard);
  closeModal(addCardModal)
}

export function editProfile(evt) {
  evt.preventDefault();

  nameInput.textContent = editProfileForm.elements.name.value;
  descriptionInput.textContent = editProfileForm.elements.description.value;
  closeModal(editProfileModal);
}