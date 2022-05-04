const express = require('express');
const passport = require('passport');
const router = express.Router()
const controller = require('../controllers/customer');

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById);
router.post('/', passport.authenticate('jwt', {session: false}), controller.add);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.deleteById);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.updateById);

module.exports = router;