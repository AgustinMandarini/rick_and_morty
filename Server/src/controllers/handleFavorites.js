let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const deleteCharacter = myFavorites.filter((char) => char.id !== id);

  myFavorites = deleteCharacter;
  return res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
