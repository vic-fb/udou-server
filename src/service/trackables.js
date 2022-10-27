const trackablesModel = require('../model/trackables');

const trackablesService = {
  getTrackables() {
    return trackablesModel.getTrackables();
  },

  addTrackable(trackable) {
    return trackablesModel.addTrackable(trackable);
  },

  getTrackableById(id) {
    return trackablesModel.getTrackableById(id);
  },

  getTrackablesByUser(userId) {
    return trackablesModel.getTrackablesByUser(userId);
  },

  // deleteTrackable(id) { // consider cascade
  // return trackablesModel.deleteTrackable(id)
  // },

};

module.exports = trackablesService;
