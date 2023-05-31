import Cards from "../../components/Cards/Cards";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions.js";

const Favorites = ({ characters, closeCard }) => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <Cards characters={myFavorites} closeCard={closeCard}></Cards>
    </>
  );
};

export default Favorites;
