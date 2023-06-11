const http = require("http");
const characters = require("./utils/data");

const PORT = 3001;

const server = http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").at(-1);
      const [matchedCharacter] = characters.filter(
        (char) => char.id === Number(id)
      );
      if (matchedCharacter) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(matchedCharacter));
      }
    }
  })
  .listen(PORT, "localhost");
