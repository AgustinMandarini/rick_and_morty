import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.cardsContainer}>
      {props.characters.map((char, index) => (
        <Card
          key={index}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.name}
          image={char.image}
          closeCard={props.closeCard}
        />
      ))}
    </div>
  );
}
