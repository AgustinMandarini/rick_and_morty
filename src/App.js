import React from "react";
// import style from "./App.module.css";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

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

  const closeCard = (id) => {
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
    <>
      <Nav onSearch={onSearch} randomCard={randomCard} />
      <Routes>
        <Route
          path="/"
          element={<Home characters={characters} closeCard={closeCard} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
