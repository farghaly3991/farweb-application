const express = require('express');
var router = express.Router();
const publicController = require('../controls/pubic_controller');




router.patch('/updateAdminData', publicController.updateAdminData);
router.get('/getAdminData', publicController.getAdminData);
router.get('/getTeacherDataById/:id', publicController.getTeacherDataById);

//////////////////////////////


module.exports = router;
