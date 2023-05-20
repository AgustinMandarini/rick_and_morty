import { useState } from "react";
import style from "./Form.module.css";
import validation from "../../helpers/validation.js";

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });

    setErrors(
      validation({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.nativeEvent.submitter.name === "loginButton"
      ? props.login(userData)
      : props.loginAsGuest();
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <div className={style.inputContainer}>
            <label className={style.label} htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              className={errors.email ? style.inputInvalid : style.inputValid}
              type="text"
              name="email"
              placeholder="Ingrese email..."
              value={userData.email}
            />
            <span className={style.errorSpan}>
              {errors.email ? errors.email : null}
            </span>
          </div>

          <div className={style.inputContainer}>
            <label className={style.label} htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              className={
                errors.password ? style.inputInvalid : style.inputValid
              }
              type="password"
              name="password"
              placeholder="Ingrese password..."
              value={userData.password}
            />
            <span className={style.errorSpan}>
              {errors.password ? errors.password : null}
            </span>
          </div>

          <button className={style.button} name="loginButton">
            Ingresar
          </button>
          <button className={style.guestButton} name="loginAsGuestButton">
            Ingresar como invitado
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
