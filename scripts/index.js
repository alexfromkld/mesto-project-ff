// @todo: Темплейт карточки

const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardsList = document.querySelector('.places__list')

// @todo: Функция создания карточки

function makeCard(name, link, deleteCard) {
  let card = cardsTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__title').textContent = name;

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

initialCards.forEach(item => cardsList.append(makeCard(item.name, item.link, deleteCard)));