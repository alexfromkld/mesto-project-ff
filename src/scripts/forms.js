import { deleteCard, likeCard, makeCard, cardsContainer } from "./index";
import {closeModalHandle} from './modal'

export const addCardForm = document.forms.new_place;
export const editProfileForm = document.forms.edit_profile;
const nameInput = document.querySelector('.profile__title');
const descriptionInput = document.querySelector('.profile__description');

export function addNewCard(evt) {
  evt.preventDefault();

  const newCardData = {
    name: addCardForm.elements.place_name.value,
    link: addCardForm.elements.link.value
  }

  const newCard = makeCard(newCardData, deleteCard, likeCard);
  addCardForm.reset();

  cardsContainer.prepend(newCard);
  closeModalHandle('.popup_type_new-card');
  console.log(newCard);
}

export function editProfile(evt) {
  evt.preventDefault();

  nameInput.textContent = editProfileForm.elements.name.value;
  descriptionInput.textContent = editProfileForm.elements.description.value;

  editProfileForm.reset();

  closeModalHandle('.popup_type_edit');
}