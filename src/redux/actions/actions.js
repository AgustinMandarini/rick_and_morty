import { ADD_FAV, REMOVE_FAV } from "./types";

const addFav = (id) => {
  return { type: ADD_FAV, payload: id };
};

const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export { addFav, removeFav };
