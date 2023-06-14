import React from "react";
import successImg from "../images/Success_status.svg";
import failImg from "../images/Fail_status.svg";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_status ${
        props.isOpen ? `popup_opened` : ``
      }`}
    >
      <div className="popup__content">
        <button
          className={`popup__button-close `}
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__status-image"
          src={props.statusImage ? successImg : failImg}
          alt="Статус"
        />
        <h3 className="popup__status-title">{props.message}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
