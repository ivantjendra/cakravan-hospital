const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs');
})

router.post('/', (req, res) => {
  if(req.body.status === 'doctor') {
    res.redirect('/doctors')
  } else {
    res.redirect('/patients')
  }
})

module.exports = router;