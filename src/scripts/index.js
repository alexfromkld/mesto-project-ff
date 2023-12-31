import { initialCards } from "./cards";
import { openModalWithImageAndCaption } from "./modal";
import { addCardForm, editProfileForm } from "./forms";
import { addNewCard } from "./forms";
import { editProfile } from "./forms";
// @todo: Темплейт карточки

const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

export const cardsContainer = document.querySelector('.places__list')

// @todo: Функция создания карточки

export function makeCard(cardData, deleteCard, likeCard) {
  const card = cardsTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = cardData.link;
  card.querySelector('.card__title').textContent = cardData.name;
  const cardDescription = card.querySelector('.card__image').alt = `Фото города ${cardData.name}`

  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCard);
  card.querySelector('.card__image').addEventListener('click', () => openModalWithImageAndCaption(cardData.link, cardDescription));
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

// @todo: Вывести карточки на страницу

initialCards.forEach(item => cardsContainer.append(makeCard(item, deleteCard, likeCard)));

// добавления обработчика на форму для добавления новой карточки

addCardForm.addEventListener('submit', (evt) => addNewCard(evt));

//добавления обработчика на форму редактирование профиля

editProfileForm.addEventListener('submit', (evt) => editProfile(evt))

