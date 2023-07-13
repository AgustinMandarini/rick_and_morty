const { User } = require("../DB_connection");

const postUser = async ({ email, password }) => {
  if (
    email &&
    password &&
    typeof email === "string" &&
    typeof password === "string" &&
    email.length > 0 &&
    password.length > 0
  ) {
    const newCharacter = await User.create({ email, password });
    return newCharacter;
  } else {
    throw new Error("Faltan datos, o los datos son incorrectos");
  }
};

module.exports = postUser;
