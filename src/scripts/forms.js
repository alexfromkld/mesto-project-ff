import { deleteCard, likeCard, makeCard, cardsList } from "./index";
import {closeModalHandle} from './modal'

const addCardForm = document.forms.new_place;
const editProfileForm = document.forms.edit_profile;

addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const newCardData = {
    name: addCard.elements.place_name.value,
    link: addCard.elements.link.value
  }

  const newCard = makeCard(newCardData, deleteCard, likeCard);
  cardsList.prepend(newCard);

  addCardForm.reset();
  closeModalHandle('.popup_type_new-card');
})

editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const name = document.querySelector('.profile__title');
  const description = document.querySelector('.profile__description');
  name.textContent = editProfileForm.elements.name.value;
  description.textContent = editProfileForm.elements.description.value;

  editProfileForm.reset();

  closeModalHandle('.popup_type_edit');
})