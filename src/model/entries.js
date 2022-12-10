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
             LEFT JOIN entries ON entries.trackableId = trackables.id 
             WHERE trackables.userId = ${userId} AND entries.date = '${date}'`,
    )
      .then((result) => result.data);
  },

  addEntry({
    trackableId, date, booleanValue = null, quantitativeValue = null,
  }) {
    return db(`INSERT INTO entries (trackableId, date, booleanValue, quantitativeValue) VALUES (${trackableId},'${date}', ${booleanValue}, ${quantitativeValue})`)
      .then((result) => result.data);
  },

  getEntriesByDateRange(trackableId, startDate, endDate) {
    return db(
      `SELECT * from entries WHERE (entries.trackableId = ${trackableId}) AND (entries.date BETWEEN '${startDate}' AND '${endDate}')`,
    )
      .then((result) => result.data);
  },

  //   deleteEntry(id) {
  //     return db(`DELETE FROM boolean_entries WHERE id = ${id}`)
  //   },

};

module.exports = entriesModel;
