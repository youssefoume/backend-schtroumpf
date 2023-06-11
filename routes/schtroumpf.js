const express = require('express');

const router = express.Router();

const schtroumpf_controller = require("../controllers/schtroumpf");


router.get('/',schtroumpf_controller.getSchtroumpfs);
router.post('/',schtroumpf_controller.registerSchtroumpf);
router.post('/login',schtroumpf_controller.login);
router.get('/:id',schtroumpf_controller.findSchtroump);
router.put('/:id',schtroumpf_controller.modifierSchtroumpf);
router.put('/amis/:id',schtroumpf_controller.ajoutAmis);
router.delete('/amis/:id',schtroumpf_controller.supprissionAmis);
module.exports = router;