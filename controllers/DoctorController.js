const Model = require('../models');
const Doctor = Model.Doctor;

class DoctorController {
  static add(req, res) {
    Doctor.create(req.body)
      .then(doctor => {
        res.redirect('/');
      })
      .catch(err => {
        res.send(err);
      })
  }
}

module.exports = DoctorController;