const db = require('./database/helper');

const trackablesModel = {

  getTrackables(userId) {
    return db(`SELECT * FROM trackables WHERE userId = ${userId}`).then((result) => result.data);
  },

  addTrackable({
    userId, name, type, unit, color, active,
  }) {
    return db(`INSERT INTO trackables (userId, name, type, unit, color, active) VALUES (${userId}, '${name}','${type}', '${unit}', '${color}', ${active})`);
  },

  getBooleanTrackables(userId) {
    return db(`SELECT * FROM trackables WHERE userId = ${userId} AND type = 'boolean'`).then((result) => result.data);
  },

  getQuantitativeTrackables(userId) {
    return db(`SELECT * FROM trackables WHERE userId = ${userId} AND type = 'quantitative'`).then((result) => result.data);
  },

  getTrackableById(id) {
    return db(`SELECT * FROM trackables WHERE id = ${id}`).then((result) => result.data[0]);
  },

  //   deleteTrackable(id) {
  //     return db(`DELETE FROM trackables WHERE id = ${id}`)
  //   },
  //

};

module.exports = trackablesModel;
