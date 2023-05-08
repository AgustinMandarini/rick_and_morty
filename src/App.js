import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";
import style from "./App.module.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SearchBar
        onSearch={(characterID) => {
          window.alert(characterID);
        }}
      />
      <div className={style.cardsContainer}>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
