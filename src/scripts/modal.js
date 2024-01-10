import { nameInput, descriptionInput } from "./forms";

export const editProfileButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const editProfileModal = document.querySelector('.popup_type_edit');
export const addNewCardModal = document.querySelector('.popup_type_new-card');
export const openedModal = document.querySelector('.popup_is-opened');

// функция открытия модальных окон и добавление слушвтелей

export function openModal(modalElement, form) {
  
  if(form) {
    form.name.value = nameInput.textContent;
    form.description.value = descriptionInput.textContent;
  }

  if(modalElement) {
    modalElement.classList.add('popup_is-opened');
    modalElement.addEventListener('click', closeModalOverlay);
    document.addEventListener('keyup', closeModalOnEsc);
  }
}

// функция закрытия модальных окон и удаления слушателей

export function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector)
  if (modal) {
    modal.classList.remove('popup_is-opened');
    modal.removeEventListener('click', closeModalOverlay);
    document.removeEventListener('keyup', closeModalOnEsc);
  }
}

// export function closeModal(element) {
//   if(element) {
//     element.classList.remove(openedModal);
//     element.removeEventListener('click', closeModalOverlay)
//     document.removeEventListener('keyup', closeModalOnEsc);
//   }
// }

// закрытие модального окна кликом по оверлею

function closeModalOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal('.popup_is-opened');
  }
}

// закрытик мадального окна клавишей Esc

function closeModalOnEsc(evt) {
  if(evt.key === 'Escape') {
    closeModal('.popup_is-opened');
  }
}
