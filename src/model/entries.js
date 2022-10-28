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

  addEntry({ trackableId, date, value }) {
    return db(`INSERT INTO entries (trackable_id, date, value) VALUES (${trackableId},'${date}', ${value})`)
      .then((result) => result.data);
  },

  getEntriesByMonth(month) { // YYYY-MM
    return db(`SELECT * FROM entries WHERE date LIKE '%${month}%'`)
      .then((result) => result.data);
  },

  //   deleteEntry(id) {
  //     return db(`DELETE FROM boolean_entries WHERE id = ${id}`)
  //   },

  // SELECT
  // product_name,
  // order_id
  // FROM
  // production.products p
  // LEFT JOIN sales.order_items o ON o.product_id = p.product_id
  // ORDER BY
  // order_id;

};

module.exports = entriesModel;
