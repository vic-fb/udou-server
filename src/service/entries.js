const entriesModel = require('../model/entries');
const trackablesService = require('./trackables');
const errorType = require('../controller/helper');

const entriesService = {
  getEntries() {
    return entriesModel.getEntries();
  },

  getEntriesByDate(userId, date) {
    return entriesModel.getEntriesByDate(userId, date);
  },

  addEntry(entry) {
    return trackablesService.getTrackableById(entry.trackable_id)
      .then((result) => (result.active
        ? entriesModel.addEntry(entry)
        : Promise.reject({ status: errorType.FORBIDDEN, message: 'Trackable is not active' })));
  },

  getEntriesByDateRange(trackableId, startDate, endDate) {
    return entriesModel.getEntriesByDateRange(trackableId, startDate, endDate);
  },

  // deleteEntry() {
  //
  // },

};

module.exports = entriesService;
