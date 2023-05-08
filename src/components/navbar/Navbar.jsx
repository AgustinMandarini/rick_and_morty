import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.container}>
      <img
        className={style.img}
        src="/img/navLogo.png"
        alt="rick and morty logo"
      />
    </nav>
  );
}
