import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites.jsx";
import Form from "./components/Form/Form.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { ROUTES } from "./helpers/RoutesPath";
import { removeFav } from "./redux/actions/actions.js";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Home from "./views/Home/Home";

function App() {
  // URL Dev:
  // const URL = "http://localhost:3001/rickandmorty";

  // URL Prod:
  const URL = "https://rickandmortyserver.onrender.com/rickandmorty";

  const [characters, setCharacters] = React.useState([]);

  const location = useLocation(); // Devuelve un objeto que tiene una propiedad "pathname" que indica la ruta actual

  const navigate = useNavigate(); // Llama directamente a la ruta especificada

  const [access, setAccess] = useState(false);

  const dispatch = useDispatch(); // Permite "dispatchear" el estado global al componente o funcion donde este declarada

  function login(userData) {
    const { email, password } = userData;

    axios(URL + `/login?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(data);
        access && navigate("/home");
      })
      .catch((err) => window.alert("Usuario o contraseña incorrectos"));
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

  const onSearch = async (id) => {
    if (!/^\d+$/.test(id)) {
      // regex que niega numero, osea, si el string no contiene un numero
      let aux = id;
      id = "?name=" + aux; // Ej: ?name=rick , de esta forma la API busca por nombre

      try {
        const { data } = await axios(`${URL}/character/${id}`);
        if (data.results[0].name) {
          const filteredChars = characters.filter(
            (char) => char.id !== data.results[0].id // filtra los id repetidos, compara id de estado con id requeridos
          );
          setCharacters([...filteredChars, data.results[0]]); // resetea el estado de characters con los filtrados
        }
      } catch (error) {
        if (error) window.alert(error);
      }
    } else {
      try {
        const { data } = await axios(`${URL}/rickandmorty/character/${id}`);
        if (data.name) {
          const filteredChars = characters.filter(
            (char) => char.id !== data.id // filtra los id repetidos, compara id de estado con id requeridos
          );
          setCharacters([...filteredChars, data]); // resetea el estado de characters con los filtrados
        }
      } catch (error) {
        window.alert("Nombre de usuario o id incorrectos");
      }
    }
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
          element={<Favorites closeCard={closeCard} />}
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
