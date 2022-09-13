class Api {
  constructor({ baseUrl, headers }) {
    // тело конструктора
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status.message}`);
  }
  //получение данных пользователя
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  //получение карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  //редактирование данных пользователя
  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse);
  }
  //добавление карточки
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }
  //удаление карточки
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id} `, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => data);
  }
  //добавление лайка
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes `, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => data);
  }
  //удаление лайка
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes `, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  //редактирование аватара
  editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseUrl: "https://mirankazaryan.nomoredomains.sbs",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
