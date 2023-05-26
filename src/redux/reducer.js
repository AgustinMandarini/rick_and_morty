import { ADD_FAV, REMOVE_FAV } from "./actions/types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (card) => card !== action.payload //A diferencia de la HW parte 1, aquie se compara card y no card.id
        ), //porque myFavorites solo guarda los IDs de las cards
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
