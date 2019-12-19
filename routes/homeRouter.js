const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/PatientController.js');
const Model = require('../models');
const Patient = Model.Patient;
const Doctor = Model.Doctor;
const DoctorPatient = Model.DoctorPatient;
const helper = require('../helpers/checkPassword')

router.get('/', (req, res) => {
  res.render('index.ejs', {msg:null});
})

router.post('/', (req, res) => {
  if(req.body.status === 'doctor') {
    res.redirect('/doctors')
  } else {
    let patientData = {};
    Patient.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(patient => {
        if(patient) {
          let checkPassword = helper(req.body.password, patient.password);
          if(checkPassword) {
            patientData = patient;
            return DoctorPatient.findAll({
              include: Doctor,
              where: {
                PatientId: patient.id
              }
            })
          } else {
            res.render('index.ejs', {msg:'Wrong password'});
          }
        } else {
          res.render('index.ejs', {msg:'Username not found'});
        }
      })
      .then(doctorPatients => {
        res.render('patients.ejs', {data:patientData, doctorPatients});
      })
      .catch(err => {
        res.send(err);
      })
  }
})

router.get('/patients/:id/checkup', (req, res) => {
  Patient.findByPk(req.params.id)
    .then(patient => {
      res.render('patientCheckup.ejs', {data:patient});
    })
    .catch(err => {
      res.send(err);
    })
})

router.get('/patients', (req, res) => {
  res.render('patients.ejs');
})

router.get('/patients/register', (req, res) => {
  res.render('registerPatient.ejs');
})

router.post('/patients/register', PatientController.add)

router.post('/patients/:id/checkup', (req, res) => {
  let doctorsData = [];
  Doctor.findAll({
    where: {
      specialist: req.body.specialist
    }
  })
    .then(doctors => {
      doctorsData = doctors;
      return Patient.findByPk(req.params.id)
    })
    .then(patient => {
      res.render('patientPickDoctor.ejs', {data:patient, doctorsData})
    })
    .catch(err => {
      res.send(err);
    })
})

router.post('/patients/:id/pickDoctor', (req, res) => {
  let patientData = {};
  Doctor.findByPk(req.body.DoctorId)
    .then(doctor => {
      const data = {
        DoctorId: doctor.id,
        PatientId: req.params.id,
        symptom: doctor.specialist 
      }
      return DoctorPatient.create(data)
    })
    .then(doctorPatient => {
      return Patient.findByPk(req.params.id);
    })
    .then(patient => {
      patientData = patient;
      return DoctorPatient.findAll({
        include: Doctor,
        where: {
          PatientId: patient.id
        }
      })
    })
    .then(doctorPatients => {
      res.render('patients.ejs', {data:patientData, doctorPatients})
    })
    .catch(err => {
      res.send(err);
    })
})





























































































































module.exports = router;