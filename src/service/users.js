const usersModel = require('../model/users');

const usersService = {
  getUsers() {
    return usersModel.getUsers();
  },

  addUser(user) {
    return usersModel.addUser(user);
  },

  getUserById(id) {
    return usersModel.getUserById(id);
  },

  // deleteUser(id) { // consider cascade
  // return trackablesModel.deleteTrackable(id)
  // },

};

module.exports = usersService;
