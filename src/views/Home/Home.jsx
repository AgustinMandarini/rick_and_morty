import Cards from "../../components/Cards/Cards";

const Home = (props) => {
  return (
    <>
      <Cards characters={props.characters} closeCard={props.closeCard}></Cards>
    </>
  );
};

export default Home;
