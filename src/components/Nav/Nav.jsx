import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  return (
    <nav>
      <div className={style.leftContainer}>
        <img src="/img/navLogo.png" alt="rick and morty logo" />
        <Link to="/about">
          <span>| ABOUT |</span>
        </Link>
        <Link to="/">
          <span>| HOME |</span>
        </Link>
      </div>
      {location.pathname === "/" ? (
        <SearchBar onSearch={props.onSearch} randomCard={props.randomCard} />
      ) : null}{" "}
    </nav>
  );
}
