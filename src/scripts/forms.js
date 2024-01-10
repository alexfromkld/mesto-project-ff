import { deleteCard, likeCard, makeCard } from "./cards";
import { cardsContainer } from "./index";
import {closeModal} from './modal';

export const addCardForm = document.forms.new_place;
export const editProfileForm = document.forms.edit_profile;
export const nameInput = document.querySelector('.profile__title');
export const descriptionInput = document.querySelector('.profile__description');

export function addNewCard(evt) {
  evt.preventDefault();

  const newCardData = {
    name: addCardForm.elements.place_name.value,
    link: addCardForm.elements.link.value
  }

  const newCard = makeCard(newCardData, deleteCard, likeCard);
  addCardForm.reset();

  cardsContainer.prepend(newCard);
  closeModal('.popup_type_new-card');
}

export function editProfile(evt) {
  evt.preventDefault();

  nameInput.textContent = editProfileForm.elements.name.value;
  descriptionInput.textContent = editProfileForm.elements.description.value;

  editProfileForm.reset();

  closeModal('.popup_type_edit');
}