const axios = require("axios");

require("dotenv").config();
const { URL } = process.env;

const getCharById = (req, res) => {
  const { id } = req.params;
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
      if (data) {
        return res.json(character);
      } else {
        return res.status(404).send("Not found");
      }
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
};

// const axios = require("axios");
// const getCharById = (id, res) => {
//   let character = {};
//   axios(`${URL}/${id}`)
//     .then(({ data }) => {
//       character = {
//         id: id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         status: data.status,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch(() => {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Character not found" }));
//     });
// };

module.exports = {
  getCharById,
};
