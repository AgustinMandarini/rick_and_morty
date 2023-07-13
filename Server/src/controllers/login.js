const { User } = require("../DB_connection");

const login = async ({ email, password }) => {
  if (
    email &&
    password &&
    typeof email === "string" &&
    typeof password === "string" &&
    email.length > 0 &&
    password.length > 0
  ) {
    const foundUser = await User.findOne({ where: { email } });
    if (!foundUser) {
      throw new Error("Usuario no encontrado");
    } else {
      if (foundUser.password === password) {
        return {
          access: true,
        };
      } else {
        throw new Error("Contraseña incorrecta");
      }
    }
  } else {
    throw new Error("Faltan datos, o los datos son incorrectos");
  }
};

module.exports = login;
