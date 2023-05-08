import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.container}>
      <input className={style.input} type="search" />
      <button className={style.button} onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
