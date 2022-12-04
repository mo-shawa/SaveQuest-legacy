const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users')
const catsCtrl = require('../../controllers/categories');
const expCtrl = require('../../controllers/expenses')
const protectedRoute = require('../../config/auth')

// Authentication routes
router.post('/signup', usersCtrl.create)
router.post('/login', usersCtrl.login)
// Protected Routes below
router.use(protectedRoute)
// Categories routes
router.post('/:user_id/categories/', catsCtrl.createCat)
router.delete('/:user_id/categories/:cat_id', catsCtrl.deleteCat)
router.put('/:user_id/categories/:cat_id', catsCtrl.updateCat)
// Expense routes
router.post('/:user_id/categories/:cat_id', expCtrl.createExpense)
router.delete('/:user_id/categories/:cat_id/:exp_id', expCtrl.deleteExpense)

module.exports = router