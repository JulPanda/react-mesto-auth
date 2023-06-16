class Api {
  constructor(configApi) {
    this._url = configApi.url;
    this._headers = configApi.headers;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };

  _request = (endpoint, options) => {
    return fetch(`${this._url}${endpoint}`, options).then(this._handleResponse);
  };

  getUserCards() {
    return this._request(`/cards`, {
      method: "GET",
      headers: this._headers,
    });
  }

  getCurrentUser() {
    return this._request(`/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  addCardsOut(item) {
    return this._request(`/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(item),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeUserInfo({ name, about }) {
    return this._request(`/users/me`, {
      method: "PATCH",
      headers: this._headers,

      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  changeUserAvatar({ avatar }) {
    return this._request(`/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatar }),
    });
  }

  setCardLike(cardId) {
    return this._request(`/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteCardLike(cardId) {
    return this._request(`/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.setCardLike(id);
    } else {
      return this.deleteCardLike(id);
    }
  }
}

const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-62",
  headers: {
    "content-type": "application/json",
    authorization: "13bee0f6-be28-45c8-b317-73da0bb635bc",
  },
});

export default api;
