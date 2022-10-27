const db = require('./database/helper');

const trackablesModel = {
  getTrackables() {
    return db('SELECT * FROM trackables')
      .then((result) => result.data);
  },

  getTrackableById(id) {
    return db(`SELECT * FROM trackables WHERE id = ${id}`).then((result) => result.data[0]);
  },

  addTrackable({
    userId, name, type, unit, color, icon,
  }) {
    return db(`INSERT INTO trackables (user_id, name, type, unit, color, icon, active) VALUES (${userId}, '${name}','${type}', '${unit}', '${color}', '${icon}', 1)`);
  },

  getTrackablesByUser(userId) {
    return db(`SELECT * FROM trackables WHERE user_id = ${userId}`).then((result) => result.data);
  },

  //   deleteTrackable(id) {
  //     return db(`DELETE FROM trackables WHERE id = ${id}`)
  //   },
  //

};

module.exports = trackablesModel;
