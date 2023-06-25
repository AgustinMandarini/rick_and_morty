const users = require("../utils/users.js");

const login = (req, res) => {
  const { email, password } = req.query;
  const userIsValid = users.some(
    (user) => user.email === email && user.password === password
  );
  if (userIsValid) {
    return res.status(200).json({ access: true });
  } else {
    return res.status(200).json({ access: false });
  }
};

module.exports = { login };
