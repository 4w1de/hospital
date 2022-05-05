const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/appointment');

router.get('/', controller.getAll);
router.get(
    '/:id',
    passport.authenticate('passportReception', { session: false }),
    controller.getById,
);
router.post(
    '/',
    passport.authenticate('passportReception', { session: false }),
    controller.add,
);
router.delete(
    '/:id',
    passport.authenticate('passportReception', { session: false }),
    controller.deleteById,
);
router.patch(
    '/:id',
    passport.authenticate('passportReception', { session: false }),
    controller.updateById,
);

module.exports = router;
