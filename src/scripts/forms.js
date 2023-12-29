import { deleteCard, likeCard, makeCard, cardsList } from "./index";

const addCard = document.forms.new_place;

addCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const newCardData = {
    name: addCard.elements.place_name.value,
    link: addCard.elements.link.value
  }

  const newCard = makeCard(newCardData, deleteCard, likeCard);
  cardsList.prepend(newCard);

  addCard.reset();
})

