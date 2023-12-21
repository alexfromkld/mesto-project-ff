// @todo: Темплейт карточки

const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardsList = document.querySelector('.places__list')

// @todo: Функция создания карточки

function makeCard(cardData, deleteCard) {
  const card = cardsTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = cardData.link;
  card.querySelector('.card__title').textContent = cardData.name;
  card.querySelector('.card__image').alt = `Фото города ${cardData.name}`

  let deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard)

  return card;
}

// @todo: Функция удаления карточки

function deleteCard(event) {
  let cardEl = event.target.closest('.card');
  cardEl.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(item => cardsList.append(makeCard(item, deleteCard)));