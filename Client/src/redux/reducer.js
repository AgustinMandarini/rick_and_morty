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
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
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
