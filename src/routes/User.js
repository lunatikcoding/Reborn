const { Router } = require('express'); // Pull the Router object out of express directly
const router = Router(); // Call the Router() function

const userController = require('../controllers/userController');

router.post('/register', userController.registration);
router.post('/login', userController.userLogin);
router.post('/logout', userController.userLogOut);

module.exports = router;
