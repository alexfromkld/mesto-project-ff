import { cardsTemplate } from "./index.js";

// @todo: Функция создания карточки

export function makeCard(cardData, deleteCard, likeCard, openModal) {
  const card = cardsTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = cardData.link;
  card.querySelector('.card__title').textContent = cardData.name;
  card.querySelector('.card__image').alt = `Фото города ${cardData.name}`;

  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCard);

  const cardImage = card.querySelector('.card__image');
  cardImage.addEventListener('click', () => openModal(cardData.link, cardData.name))
  return card;
}

// @todo: Функция удаления карточки

export function deleteCard(event) {
  let cardEl = event.target.closest('.card');
  cardEl.remove();
}

// функция лайка карточек

export function likeCard(evt) {
  if(evt.target.classList.contains('card__like-button_is-active')) {
    evt.target.classList.remove('card__like-button_is-active')
  } else {
    evt.target.classList.add('card__like-button_is-active')
  }
}