import { cardsTemplate } from "./index.js";
import { openModalWithImageAndCaption } from "./index.js";

export const initialCards = [
    {
      name: "Калининград",
      link: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTjWpLEAGsDe-f-HWQhCdhG7IC4ljIKRDTl9AwkKceIYbO2Eq8ukVph8WQQjm-DR-2XlBAwg0A3TM_ZXdH0covl95BpDZC_sGGTzPJfuw',
    },
    {
      name: "Ашдод",
      link: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTi_y3cMuQF2dFYMliYMfl3-hOkMqj8SaZHaWP-EfiXBvDhrO8SGF2IfobpgoQv6RjCPAPimQKXYfzqsc7Yf_KkBfM708dhOr-2Nn21kg',
    },
    {
      name: "Хайфа",
      link: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTrvyGxWDS2qYKCFtGH9qjAPuRJs7JmtbXHbTYj3pquS8PDgoMwwqm4TgxnKIXH09LIx1nC2MflFpT1-rwtO8f8xGfB5o93zqpTUshcUA',
    },
    {
      name: "Каунас",
      link: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRKivKlMZXcsZxPWvkD89v0CsNuPZdxBL9d4PJz77012baK4IELt0cGKhbGSbWZQVgeNN0B2g1xuJ_HrkmfsNCHYAqtu4GwbnsxBYPYgg',
    },
    {
      name: "Бат-ям",
      link: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQXiIMOaU1oI9LR31dKVKutK2vpgklfIih9h30X9MXAYjhuHDN9FTokFLhKWTh15hqsWR4ZeAF6Raaq9-IzyyxKeD2OUJhGaZhofq-75ts',
    },
    {
      name: "Тель-Авив",
      link: 'https://lh5.googleusercontent.com/p/AF1QipOppRB87fzikkJN5SV6l3ZXSbAicMtBMaPO8Zfc=w1080-h624-n-k-no',
    }
];

// @todo: Функция создания карточки

export function makeCard(cardData, deleteCard, likeCard, openModal, openCard) {
  const card = cardsTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = cardData.link;
  card.querySelector('.card__title').textContent = cardData.name;
  card.querySelector('.card__image').alt = `Фото города ${cardData.name}`;

  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCard);
  card.querySelector('.card__image').addEventListener('click', (evt) => {
    const imageUrl = evt.currentTarget.src;
    const imageCaption = evt.currentTarget.alt;
    openModalWithImageAndCaption(imageUrl, imageCaption);
  });
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


