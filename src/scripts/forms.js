import { deleteCard, likeCard, makeCard, cardsList } from "./index";
import {closeModalHandle} from './modal'

const addCard = document.forms.new_place;
const editProfile = document.forms.edit_profile;

addCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const newCardData = {
    name: addCard.elements.place_name.value,
    link: addCard.elements.link.value
  }

  const newCard = makeCard(newCardData, deleteCard, likeCard);
  cardsList.prepend(newCard);

  addCard.reset();
  closeModalHandle('.popup_type_new-card');
})

editProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const name = document.querySelector('.profile__title');
  const description = document.querySelector('.profile__description');
  name.textContent = editProfile.elements.name.value;
  description.textContent = editProfile.elements.description.value;

  closeModalHandle('.popup_type_edit');
})