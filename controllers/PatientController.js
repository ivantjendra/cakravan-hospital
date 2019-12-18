const Model = require('../models');
const Patient = Model.Patient;

class PatientController {
  static findAll(req, res) {
    Patient.findAll()
      .then(patients => {
        res.render('/patients.ejs', { data : patients });
      })
      .catch(err => {
        res.send(err);
      })
  }
}

module.exports = PatientController;