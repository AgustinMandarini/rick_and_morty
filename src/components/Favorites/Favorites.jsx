import Cards from "../../components/Cards/Cards";
import { useSelector } from "react-redux";

const Favorites = ({ characters, closeCard }) => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const favCharacters = characters.filter((value) => {
    return myFavorites.includes(value.id);
  });

  return (
    <>
      <Cards characters={favCharacters} closeCard={closeCard}></Cards>
    </>
  );
};

export default Favorites;
