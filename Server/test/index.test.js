const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/JJJ").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    const info = require("../src/utils/users");
    const { email, password } = info[Math.floor(Math.random() * info.length)];
    it("Si la informacion de login es correcta, devuelve un objeto { access: true }", async () => {
      const response = await agent.get(
        `/rickandmorty/login/?email=${email}&password=${password}`
      );
      expect(response.body).toEqual({ access: true });
    });
    it("Si la informacion de login es incorrecta, devuelve un objeto { access: false }", async () => {
      const response = await agent.get(
        `/rickandmorty/login/?email=LLLL&password=P`
      );
      expect(response.body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    let firstRequest;

    it("Lo enviado en el POST por body debe ser un arreglo", async () => {
      firstRequest = await agent.post("/rickandmorty/fav").send({
        id: 241,
        name: "Mr. Marklovitz",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/241.jpeg",
      });

      expect(Array.isArray(firstRequest.body)).toBeTruthy();
    });
    it("Lo enviado en el POST por body debe incluir los elementos agregados anteriormente", async () => {
      const request = await agent.post("/rickandmorty/fav").send({
        id: 634,
        name: "Train Cops Instructor",
        status: "Dead",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/634.jpeg",
      });
      expect(request.body).toContainEqual(firstRequest.body[0]);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const char1 = {
      id: 241,
      name: "Mr. Marklovitz",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/241.jpeg",
    };

    const char2 = {
      id: 634,
      name: "Train Cops Instructor",
      status: "Dead",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/634.jpeg",
    };
    it("Si el ID no es valido, devuelve un arreglo exactamente igual al previo", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/221441");
      expect(body).toContainEqual(char1);
      expect(body).toContainEqual(char2);
    });
    it("Elimina correctamente al personaje que contenga el ID", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/241");
      console.log(body);
      expect(body).not.toContainEqual(char1);
    });
  });
});
