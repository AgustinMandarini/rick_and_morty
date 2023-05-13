import React from "react";
import Cards from "./components/Cards/Cards.jsx";
// import style from "./App.module.css";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = React.useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const filteredChars = characters.filter(
            (char) => char.id !== data.id // filtra los id repetidos, compara id de estado con id requeridos
          );
          setCharacters([...filteredChars, data]); // resetea el estado de characters con los filtrados
        }
      })
      .catch((error) => {
        if (error) window.alert("¡No hay personajes con este ID!");
      });
  };

  const onClose = (id) => {
    const updatedCharacters = characters.filter(
      // Filtra los id de los elementos que son clickeados para cerrarse
      (char) => char.id !== Number(id)
    );
    setCharacters(updatedCharacters);
  };

  const randomCard = () => {
    let id = Math.floor(Math.random() * (826 - 1) + 1).toString();
    onSearch(id);
  };

  return (
    <div>
      <Nav onSearch={onSearch} randomCard={randomCard}></Nav>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
