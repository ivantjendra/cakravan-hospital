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

  static add(req, res) {
    console.log(req.body)
    // Patient.create(req.body)
    //   .then(patient => {
    //     res.redirect('/');
    //   })
    //   .catch(err => {
    //     res.send(err);
    //   })
  }
}

module.exports = PatientController;