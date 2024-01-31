export const editProfileButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const editProfileModal = document.querySelector('.popup_type_edit');
export const addNewCardModal = document.querySelector('.popup_type_new-card');
export const openedModal = document.querySelector('.popup_is-opened');

// функция открытия модальных окон и добавление слушвтелей

export function openModal(modalElement) {
  if(modalElement) {
    modalElement.classList.add('popup_is-opened');
    modalElement.addEventListener('click', closeModalOverlay);
    document.addEventListener('keyup', closeModalOnEsc);
  }
}

// функция закрытия модальных окон и удаления слушателей

export function closeModal(element) {
  if(element) {
    element.classList.remove('popup_is-opened');
    element.removeEventListener('click', closeModalOverlay)
    document.removeEventListener('keyup', closeModalOnEsc);
  }
}

// закрытие модального окна кликом по оверлею

function closeModalOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const element = evt.target;
    closeModal(element);
  }
}

// закрытие мадального окна клавишей Esc

export function closeModalOnEsc(evt) {
  if(evt.key === 'Escape') {
    const element = document.querySelector('.popup_is-opened')
    closeModal(element);
  }
}
