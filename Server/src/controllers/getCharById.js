require("dotenv").config();
const axios = require("axios");
const { URL } = process.env;

const getCharById = (id, res) => {
  let character = {};
  axios(`${URL}/${id}`)
    .then(({ data }) => {
      character = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch(() => {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Character not found" }));
    });
};

module.exports = {
  getCharById,
};
