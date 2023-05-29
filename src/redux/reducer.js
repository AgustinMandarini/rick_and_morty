import { ADD_FAV, FILTER_CARDS, REMOVE_FAV } from "./actions/types";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (card) => card.id !== action.payload //A diferencia de la HW parte 1, aquie se compara card y no card.id
        ), //porque myFavorites solo guarda los IDs de las cards
      };
    // case FILTER_CARDS:
    //   return {
    //     ...state,
    //     myFavorites: state.allCharacters.filter((char) => char),
    //   };
    default:
      return { ...state };
  }
};

export default rootReducer;
