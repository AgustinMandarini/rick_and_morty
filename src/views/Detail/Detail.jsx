import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div>
      <img src={character.image} alt="" />
      <div>
        <h1>{character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin ? character.origin.name : null}</h2>
      </div>
    </div>
  );
};

export default Detail;
