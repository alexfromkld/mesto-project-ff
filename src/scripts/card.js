import { cardsTemplate } from "./index.js";
import { deleteCardAPI, addLike, deleteLike } from "./api.js";

// @todo: Функция создания карточки

export function makeCard(cardData, userData, deleteCard, likeCard, openModal) {
  const card = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = cardData.link;
  cardImage.alt = `Фото: ${cardData.name}`;
  card.querySelector('.card__title').textContent = cardData.name;
  card.querySelector('.card__likes').textContent = cardData.likes.length.toString();

  if(userData._id === cardData.owner._id){
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.classList.add('card__delete-button_visible');
    deleteButton.addEventListener('click', (event) => {
      console.log('click');
      deleteCard(event, cardData._id)
    });
  }

  const likeButton = card.querySelector('.card__like-button');
  const likeCounter = card.querySelector('.card__likes')
  if(cardData.likes !== 0){
    const islikedByMe = cardData.likes.some(user => {
      return user._id === userData._id
    })
    if(islikedByMe) {
      likeButton.classList.add('card__like-button_is-active');
    }
  }
  likeButton.addEventListener('click', (event) => likeCard(event, cardData._id, likeCounter));
  cardImage.addEventListener('click', () => openModal(cardData.link, cardData.name))
  return card;
}

// @todo: Функция удаления карточки

export function deleteCard(event, cardId) {
  deleteCardAPI(cardId)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  let cardEl = event.target.closest('.card');
  cardEl.remove();
}

// функция лайка карточек

export function likeCard(evt, id, likeCounter) {
  console.log(evt);
  if(evt.target.classList.contains('card__like-button_is-active')) {
    deleteLike(id)
      .then(res => {
        console.log(res)
        evt.target.classList.remove('card__like-button_is-active')
        likeCounter.textContent = res.likes.length.toString();
      })
      .catch(err => console.log(err))
  } else if(!evt.target.classList.contains('card_like-button_is-active')) {
    addLike(id)
      .then(res => {
        console.log(res)
        evt.target.classList.add('card__like-button_is-active');
        likeCounter.textContent = res.likes.length.toString();
      })
      .catch(err => console.log(err))
  }
}