const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/PatientController.js');

router.get('/register', (req, res) => {
  res.render('registerPatient.ejs');
})

router.post('/register', PatientController.add)

router.get('/', (req, res) => {
  console.log(req.body)
  res.render('patients.ejs');
})

router.get('/:id/checkup', (req, res) => {

})

router.post('/:id/checkup', (req, res) => {

})

router.get('/:id/pickDoctor', (req, res) => {

})

router.post('/:id/pickDoctor', (req, res) => {

})

router.get('/:id/logout', (req, res) => {

})

module.exports = router;