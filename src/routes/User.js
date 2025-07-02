const { Router } = require('express');
const router = Router();

const userController = require('../controllers/userController');

router.post('/register', userController.registration);
router.post('/login', userController.userLogin);
router.post('/logout', userController.userLogOut);

module.exports = router;
