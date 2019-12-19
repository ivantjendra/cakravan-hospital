const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/PatientController.js');

router.get('/register', (req, res) => {
  res.render('registerPatient.ejs');
})

router.post('/register', PatientController.add)

router.get('/login', (req, res) => {
  res.render('loginPatient.ejs');
})

module.exports = router;