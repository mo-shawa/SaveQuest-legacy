const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users')
const catsCtrl = require('../../controllers/categories');
const expCtrl = require('../../controllers/expenses')

// Authentication routes
router.post('/signup', usersCtrl.create)
router.post('/login', usersCtrl.login)
// Categories routes
router.post('/:user_id/categories/', catsCtrl.createCat)
router.delete('/:user_id/categories/:cat_id', catsCtrl.deleteCat)
router.put('/:user_id/categories/:cat_id', catsCtrl.updateCat)
// Expense routes
router.post('/:user_id/categories/:cat_id', expCtrl.createExpense)

module.exports = router