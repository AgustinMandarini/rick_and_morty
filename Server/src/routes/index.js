const router = require("express").Router();
const { getCharById } = require("../controllers/getCharById");
const postUser = require("../controllers/postUser");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

router.get("/character/:id", getCharById);

router.get("/login", async (req, res) => {
  const { email, password } = req.query;
  try {
    const foundUser = await login({ email, password });
    res.status(200).json(foundUser);
  } catch (error) {
    if (error.message === "Usuario no encontrado") {
      res.status(404).json({ error: error.message });
    } else if (error.message === "Contraseña incorrecta") {
      res.status(403).json({ error: error.message });
    } else if (error.message === "Faltan datos") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await postUser({ email, password });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/fav", async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  try {
    const allFavorites = await postFav({
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    });
    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(401).json({ erro: error.message });
  }
});

router.delete("/fav/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allFavorites = await deleteFav(id);
    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
