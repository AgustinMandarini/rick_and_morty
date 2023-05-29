import Cards from "../../components/Cards/Cards";
import { useSelector } from "react-redux";

const Favorites = ({ characters, closeCard }) => {
  const allCharacters = useSelector((state) => state.allCharacters);

  return (
    <>
      <Cards characters={allCharacters} closeCard={closeCard}></Cards>
    </>
  );
};

export default Favorites;
