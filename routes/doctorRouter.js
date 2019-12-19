const express = require('express');
const router = express.Router();

const DoctorController = require('../controllers/DoctorController')

// signup/create
router.post('/register', DoctorController.register);

// redirect to user profile/edit
router.get('/:id/edit', DoctorController.edit);

// after submit
router.post('/:id/edit', DoctorController.submitEdit);

// router.get('/:id', DoctorController.user)

// login/read
router.post('/logIn', DoctorController.login);

// delete/destroy
router.get('/:id/delete', DoctorController.delete);

router.get('/:id/logout', DoctorController.logout);

module.exports = router;