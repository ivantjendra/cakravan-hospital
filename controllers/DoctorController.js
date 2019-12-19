const Model = require('../models');
const Doctor = Model.Doctor;

class DoctorController {
  static findAll(req, res) {
    Doctor.findAll()
      .then(doctors => {
        res.render('/doctors.ejs', { data : doctors });
      })
      .catch(err => {
        res.send(err);
      })
  }

  static add(req, res) {
    Doctor.create(req.body)
      .then(patient => {
        res.redirect('/');
      })
      .catch(err => {
        res.send(err);
      })
  }
}

module.exports = DoctorController;