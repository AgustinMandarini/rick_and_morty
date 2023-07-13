const { Favorite } = require("../DB_connection");

const postFav = async ({
  id,
  name,
  origin,
  status,
  image,
  species,
  gender,
}) => {
  if ((id, name && origin && status && image && species && gender)) {
    const newFavorite = await Favorite.findOrCreate({
      where: { name },
      defaults: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
    const allFavorites = await Favorite.findAll();
    return allFavorites;
  } else {
    throw new Error("Faltan datos");
  }
};

module.exports = postFav;
