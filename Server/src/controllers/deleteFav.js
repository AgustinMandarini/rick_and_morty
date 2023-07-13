const { Favorite } = require("../DB_connection");

const deleteFav = async (id) => {
  await Favorite.destroy({ where: { id } });
  const allFavorites = await Favorite.findAll();
  return allFavorites;
};

module.exports = deleteFav;
