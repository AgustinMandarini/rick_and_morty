import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar(props) {
  return (
    <nav className={style.container}>
      <img
        className={style.img}
        src="/img/navLogo.png"
        alt="rick and morty logo"
      />
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
}
