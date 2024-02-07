import { deleteCard, likeCard, makeCard } from "./card";
import { cardsContainer, userData, cardsList } from "./index";
import { closeModal } from './modal';
import { openModalWithImageAndCaption } from "./index";
import { editProfileInfo, postNewCard, changeAvatar } from "./api";

export const addCardForm = document.forms.new_place;
export const editProfileForm = document.forms.edit_profile;
export const changeAvatarForm = document.forms.change_avatar;
export const nameInput = document.querySelector('.profile__title');
export const descriptionInput = document.querySelector('.profile__description');
export const userAvatar = document.querySelector('.profile__image');

const addCardModal = document.querySelector('.popup_type_new-card');
const editProfileModal = document.querySelector('.popup_type_edit');
const changeAvatarModal = document.querySelector('.popup_change_avatar');
const addCardFormButton = addCardForm.querySelector('.button');
const editProfileButton = editProfileForm.querySelector('.button');
const changeAvatarButton = changeAvatarForm.querySelector('.button');

export function addNewCard(evt) {
  evt.preventDefault();
  const newCardData = {
    name: addCardForm.elements.place_name.value,
    link: addCardForm.elements.link.value
  }
  postNewCard(addCardFormButton, newCardData.name, newCardData.link)
    .then(postedCard => {
      console.log(postedCard);
      cardsContainer.prepend(makeCard(postedCard, userData, deleteCard, likeCard, openModalWithImageAndCaption))
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      addCardForm.reset();
      closeModal(addCardModal)
    })
}

export function editProfile(evt) {
  evt.preventDefault();
  const name = editProfileForm.elements.name.value;
  const about = editProfileForm.elements.description.value;
  editProfileInfo(editProfileButton, name, about)
    .then(updatedUserData => {
      console.log(updatedUserData);
      nameInput.textContent = updatedUserData.name;
      descriptionInput.textContent = updatedUserData.about;
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      closeModal(editProfileModal);
    })
}

export function editUserAvatar(evt) {
  evt.preventDefault();
  const avatar = changeAvatarForm.elements.avatar_link.value;
  changeAvatar(changeAvatarButton, avatar)
    .then(user => {
      console.log(user.avatar)
      userAvatar.style.backgroundImage = `url('${user.avatar}')`;
    })
    .catch(err => console.log(err))
    .finally(() => {
      changeAvatarForm.reset();
      closeModal(changeAvatarModal);
    })
}