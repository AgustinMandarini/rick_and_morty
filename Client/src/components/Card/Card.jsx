import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions/actions";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const allCharacters = useSelector((state) => state.allCharacters);

  const dispatch = useDispatch();

  useEffect(() => {
    allCharacters.forEach((fav) => {
      console.log("fav.id: " + fav.id);
      console.log("props.id: " + props.id);
      console.log(isFav);
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  const handleFavorite = () => {
    isFav ? dispatch(removeFav(props.id)) : dispatch(addFav(props));
    setIsFav(!isFav);
  };

  // const handleFavorite = () => {
  //   if (isFav) {
  //     setIsFav(false);
  //     dispatch(removeFav(props.id));
  //   } else {
  //     setIsFav(true);
  //     dispatch(addFav(props));
  //   }
  // };

  // Sincroniza el estado local "isFav" con el global "allCharacters", para que al desmontar el componente y volver
  // a montarlo posteriormente, no se pierda el estado.

  return (
    <div className={style.container}>
      <img className={style.img} src={props.image} alt="" />
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
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
