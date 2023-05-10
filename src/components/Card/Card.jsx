import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.image} alt="" />
      <button className={style.button} onClick={props.onClose}>
        X
      </button>
      {/* <h2>{props.id}</h2> */}
      <div className={style.cardInfo}>
        <h1>{props.name}</h1>
        <h2>Status: {props.status}</h2>
        <h2>Species: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}
