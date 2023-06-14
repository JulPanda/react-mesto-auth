import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${
        props.card.link ? `popup_opened` : ""
      }`}
    >
      <div className="popup__content-image">
        <button
          className="popup__button-close popup__button-close_image"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card?.link}
          alt={props.card ? props.card.name : ``}
        />
        <h3 className="popup__title-image">
          {props.card ? props.card.name : ``}
        </h3>
      </div>
    </div>
  );
}

export default ImagePopup;
