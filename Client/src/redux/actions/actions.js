import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./types";

// const addFav = (character) => {
//   return { type: ADD_FAV, payload: character };
// };

const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    return dispatch({
      type: ADD_FAV,
      payload: data,
    });
  };
};

const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const { data } = await axios.delete(endpoint);
    return dispatch({
      type: "REMOVE_FAV",
      payload: data,
    });
  };
};
// const removeFav = (id) => {
//   return { type: REMOVE_FAV, payload: id };
// };

const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};

export { addFav, removeFav, filterCards, orderCards };
