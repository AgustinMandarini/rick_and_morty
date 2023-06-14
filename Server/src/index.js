const http = require("http");
const character = require("./controllers/getCharById");

const PORT = 3001;

http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").at(-1);
      character.getCharById(id, res);
    }
  })
  .listen(PORT, "localhost");
