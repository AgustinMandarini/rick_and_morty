import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = (props) => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <img className={style.img} src={character?.image} alt="character" />
        <div>
          <h1>{character.name}</h1>
          <h2>
            Status: <span className={style.span}>{character?.status}</span>
          </h2>
          <h2>
            Species: <span className={style.span}>{character?.species}</span>
          </h2>
          <h2>
            Gender: <span className={style.span}>{character?.gender}</span>
          </h2>
          <h2>
            Origin: <span className={style.span}>{character.origin?.name}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
