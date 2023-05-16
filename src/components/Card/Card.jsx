import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.image} alt="" />
      <button
        className={style.button}
        onClick={(event) =>
          props.closeCard(props.id)
        } /* De esta manera se evita que la funcion se ejecute instantaneamente 
      y podemos pasarle el id que viene de Cards al padre App.js*/
      >
        X
      </button>
      <span
        className={
          props.status === "Alive" ? style.statusAlive : style.statusDead
        }
      >
        {props.status}
      </span>
      <Link to={`/detail/${props.id}`}>
        <div className={style.characterName}>
          <h1>{props.name}</h1>
        </div>
      </Link>
      <div className={style.cardInfo}></div>
    </div>
  );
}
