import React from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = React.useState("");

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="search"
        value={id}
        onChange={handleInputChange}
      />
      {/* De esta manera se evita que la funcion se ejecute instantaneamente 
      y podemos pasarle tranquilamente el id local 👇️ de SearchBar al padre App.js*/}
      <button className={style.button} onClick={(event) => props.onSearch(id)}>
        Agregar
      </button>
      <button className={style.button} onClick={props.randomCard}>
        Random
      </button>
      <button className={style.button} onClick={props.logout}>
        Log Out
      </button>
    </div>
  );
}
