import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? `popup_opened` : ``
      }`}
    >
      <div className="popup__content">
        <h2 className="popup__title">{props.title}</h2>
        <button
          className={`popup__button-close popup__button-close_${props.name}`}
          type="button"
          onClick={props.onClose}
        ></button>

        <form
          className="popup__form"
          name={`${props.name}`}
          id={`form-${props.name}`}
          onSubmit={props.onSubmit}
          //noValidate
        >
          {props.children}

          <button className="popup__button-save" type="submit">
            {props.textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
