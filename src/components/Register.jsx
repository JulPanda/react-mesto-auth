import { React, useState } from "react";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister(formValue);
  };

  return (
    <>
      <div className="login">
        <h2 className="login__title">Регистрация</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            name="email"
            className="login__input"
            required
            onChange={handleChange}
            value={formValue.email || ""}
          />
          <input
            id="input-password"
            type="password"
            placeholder="Пароль"
            name="password"
            className="login__input"
            required
            onChange={handleChange}
            value={formValue.password || ""}
          />
          <button className="login__button" type="submit">
            Зарегистрироваться
          </button>
          <Link to="/sign-in" className="login__link">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
