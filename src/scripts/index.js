import { initialCards } from "./cards";
// @todo: Темплейт карточки

const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardsList = document.querySelector('.places__list')

// @todo: Функция создания карточки

function makeCard(cardData, deleteCard, likeCard) {
  const card = cardsTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = cardData.link;
  card.querySelector('.card__title').textContent = cardData.name;
  card.querySelector('.card__image').alt = `Фото города ${cardData.name}`

  let deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  let likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCard);
  return card;
}

// @todo: Функция удаления карточки

function deleteCard(event) {
  let cardEl = event.target.closest('.card');
  cardEl.remove();
}

//функция лайка карточек

function likeCard(evt) {
  if(evt.target.classList.contains('card__like-button_is-active')) {
    evt.target.classList.remove('card__like-button_is-active')
  } else {
    evt.target.classList.add('card__like-button_is-active')
  }
}

// @todo: Вывести карточки на страницу

initialCards.forEach(item => cardsList.append(makeCard(item, deleteCard, likeCard)));
