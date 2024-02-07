const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-5',
  headers: {
    authorization: '3d3798a8-9fa5-486b-9c0c-6ca5290b4176',
    'Content-Type': 'application/json'
  }
}

//получение от сервера информации о пользователе

export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err)
  })
}

//получение карточек с сервера

export const getInititalCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err);
  })
}

//запрос серверу на изменение данных пользователя

export const editProfileInfo = (button, name, about) => {
  button.disabled = true;
  button.textContent = 'Сохранение...';
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about
  })
})
  .then(res => {
    if(res.ok) {
      button.disabled = false;
      button.textContent = 'Сохранить';
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err);
  })
}

//отправление запроса на добавление карточки на сервер

export const postNewCard = (button ,name, link) => {
  button.disabled = true;
  button.textContent = 'Сохранение...';
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(res => {
    if(res.ok) {
      button.disabled = false;
      button.textContent = 'Сохранить';
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err);
  })
}

//запрос на удаление карточки с сервера

export const deleteCardAPI = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err)
  })
}

//запрос на добавления лайка

export const addLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err);
  })
}

//запрос на удаление лайка

export const deleteLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err);
  })
}

//запрос на смену аватара

export const changeAvatar = (button, avatar) => {
  button.disabled = true;
  button.textContent = 'Сохранение...';
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(res => {
    if(res.ok) {
      button.disabled = false;
      button.textContent = 'Сохранить';
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch(err => {
    console.log(err);
  })
}

const isLoading = (button) => {

}

  