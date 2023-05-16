import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <div className={style.leftContainer}>
        <img src="/img/navLogo.png" alt="rick and morty logo" />
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} randomCard={props.randomCard} />
    </nav>
  );
}
