import React from "react";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "./helpers/RoutesPath";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions/actions.js";

function App() {
  const [characters, setCharacters] = React.useState([]);

  const location = useLocation(); // Devuelve un objeto que tiene una propiedad "pathname" que indica la ruta actual

  const navigate = useNavigate(); // Llama directamente a la ruta especificada

  const [access, setAccess] = useState(false);

  const dispatch = useDispatch(); // Permite "dispatchear" el estado global al componente o funcion donde este declarada

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  const loginAsGuest = () => {
    setAccess(true);
    navigate("/home");
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (id) => {
    if (!/^\d+$/.test(id)) {
      // regex que niega numero, osea, si el string no contiene un numero
      let aux = id;
      id = "?name=" + aux; // Ej: ?name=rick , de esta forma la API busca por nombre

      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          if (data.results[0].name) {
            const filteredChars = characters.filter(
              (char) => char.id !== data.results[0].id // filtra los id repetidos, compara id de estado con id requeridos
            );
            setCharacters([...filteredChars, data.results[0]]); // resetea el estado de characters con los filtrados
          }
        })
        .catch((error) => {
          if (error) window.alert(error.response.data.message);
        });
    }
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const filteredChars = characters.filter(
            (char) => char.id !== data.id // filtra los id repetidos, compara id de estado con id requeridos
          );
          setCharacters([...filteredChars, data]); // resetea el estado de characters con los filtrados
        }
      })
      .catch((error) => {
        if (error) window.alert(error.response.data.message);
      });
  };

  const closeCard = (id) => {
    const updatedCharacters = characters.filter(
      // Filtra los id de los elementos que son clickeados para cerrarse
      (char) => char.id !== id
    );
    setCharacters(updatedCharacters);
    dispatch(removeFav(id));
  };

  const randomCard = () => {
    let id = Math.floor(Math.random() * (826 - 1) + 1).toString();
    onSearch(id);
  };

  return (
    <>
      {location.pathname !== ROUTES.LOGIN && (
        <Nav onSearch={onSearch} randomCard={randomCard} logout={logout} />
      )}

      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<Home characters={characters} closeCard={closeCard} />}
        ></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route
          path="/favorites"
          element={<Favorites characters={characters} closeCard={closeCard} />}
        ></Route>
        <Route
          path={ROUTES.LOGIN}
          element={<Form login={login} loginAsGuest={loginAsGuest} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
