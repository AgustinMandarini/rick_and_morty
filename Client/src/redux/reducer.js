import { act } from "react-dom/test-utils";
import {
  ADD_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  REMOVE_FAV,
} from "./actions/types";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const copy1 = state.allCharacters;
      copy1.push(action.payload);
      return {
        ...state,
        allCharacters: copy1,
        myFavorites: copy1,
      };

    case REMOVE_FAV:
      const copy2 = state.allCharacters.filter(
        (card) => card.id !== action.payload
      );

      return {
        ...state,
        allCharacters: copy2,
        myFavorites: copy2,
      };
    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };
    case ORDER_CARDS:
      let copy4 = state.allCharacters.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: copy4,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
