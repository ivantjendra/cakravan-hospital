const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/PatientController.js');

router.get('/register', (req, res) => {
  res.render('registerPatient.ejs');
})

module.exports = router;