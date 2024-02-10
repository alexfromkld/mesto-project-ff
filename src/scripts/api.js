const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-5',
  headers: {
    authorization: '3d3798a8-9fa5-486b-9c0c-6ca5290b4176',
    'Content-Type': 'application/json'
  }
}

const handleJsonResponse = (res) => {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
};

//получение от сервера информации о пользователе

export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(handleJsonResponse)
}

//получение карточек с сервера

export const getInititalCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(handleJsonResponse)
}

//запрос серверу на изменение данных пользователя

export const editProfileInfo = (button, name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about
  })
})
  .then(handleJsonResponse)
}

//отправление запроса на добавление карточки на сервер

export const postNewCard = (button ,name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(handleJsonResponse)
}

//запрос на удаление карточки с сервера

export const deleteCardAPI = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(handleJsonResponse)
}

//запрос на добавления лайка

export const addLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(handleJsonResponse)
}

//запрос на удаление лайка

export const deleteLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(handleJsonResponse)
}

//запрос на смену аватара

export const changeAvatar = (button, avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(handleJsonResponse)
}

  