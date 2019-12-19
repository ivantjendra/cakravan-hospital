const express = require('express');
const router = express.Router();
const DoctorController = require('../controllers/DoctorController.js');

router.get('/register', (req, res) => {
  res.render('registerDoctor.ejs');
})

router.post('/register', DoctorController.add)

module.exports = router;