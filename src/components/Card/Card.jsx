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
      <div className={style.cardInfo}>
        <Link to={`/detail/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
        <h2>Status: {props.status}</h2>
        <h2>Species: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}
