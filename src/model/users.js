const db = require('./database/helper');

const usersModel = {
  getUsers() {
    return db('SELECT * FROM users').then((result) => result.data);
  },

  addUser({ name, email }) {
    return db(`INSERT INTO users (name, email) VALUES ('${name}','${email}')`);
  },

  getUserById(id) {
    return db(`SELECT * FROM users WHERE id = ${id}`).then((result) => result.data);
  },
};

module.exports = usersModel;
