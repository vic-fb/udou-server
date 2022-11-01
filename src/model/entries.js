const db = require('./database/helper');

const entriesModel = {
  getEntries() {
    return db('SELECT * FROM entries')
      .then((result) => result.data);
  },

  getEntriesByDate(userId, date) {
    return db(
      `SELECT trackables.*, entries.*
             FROM trackables
             LEFT JOIN entries ON entries.trackable_id = trackables.id 
             WHERE trackables.user_id = ${userId} AND entries.date = '${date}'`,
    )
      .then((result) => result.data);
  },

  addEntry({
    trackable_id, date, boolean_value = null, quantitative_value = null,
  }) {
    return db(`INSERT INTO entries (trackable_id, date, boolean_value, quantitative_value) VALUES (${trackable_id},'${date}', ${boolean_value}, ${quantitative_value})`)
      .then((result) => result.data);
  },

  getEntriesByDateRange(trackableId, startDate, endDate) {
    return db(
      `SELECT * from entries WHERE (entries.trackable_id = ${trackableId}) AND (entries.date BETWEEN '${startDate}' AND '${endDate}')`,
    )
      .then((result) => result.data);
  },

  //   deleteEntry(id) {
  //     return db(`DELETE FROM boolean_entries WHERE id = ${id}`)
  //   },

};

module.exports = entriesModel;
