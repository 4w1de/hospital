const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/employee');

router.get('/', controller.getAll);
router.get(
    '/:id',
    passport.authenticate('passportAdmin', { session: false }),
    controller.getById,
);
router.post(
    '/',
    passport.authenticate('passportAdmin', { session: false }),
    controller.add,
);
router.delete(
    '/:id',
    passport.authenticate('passportAdmin', { session: false }),
    controller.deleteById,
);
router.patch(
    '/:id',
    passport.authenticate('passportAdmin', { session: false }),
    controller.updateById,
);

module.exports = router;
