const { UserModel } = require('../models/user')
const { CategoryModel } = require('../models/user')
const jwt = require('jsonwebtoken')


const createCat = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.user_id)
        const newCat = new CategoryModel(req.body)
        user.budget.categories.push(newCat)
        user.budget.total += +req.body.max
        const updatedUser = await user.save()
        //  START TOKEN
        const token = jwt.sign({ user: updatedUser }, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json(token)
    } catch (error) {
        res.status(400).json(error)
    }


}

// TOKENIZED
const deleteCat = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.user_id)
        const catIdx = user.budget.categories.findIndex(cat => cat.id === req.params.cat_id)
        if (catIdx < 0) throw new Error('Category not found')
        // Only way I could think of 
        let category = user.budget.categories[catIdx]

        if (category.expenses.length) {
            if (category.expenses.length === 1) {
                user.budget.totalExp -= +category.expenses[0].amount
            } else {
                console.log('CATEGORY EXPENSES: ', category.expenses)
                let sumExpenses = category.expenses.reduce((sum, exp) => { return sum + exp.amount }, 0)
                console.log(sumExpenses)
                console.log('USER BUDGET: ', user.budget)
                user.budget.totalExp -= +sumExpenses
            }
        }
        user.budget.total -= +user.budget.categories[catIdx].max
        let deleted = user.budget.categories.splice(catIdx, 1)
        const updatedUser = await user.save()
        //  START TOKEN
        const token = jwt.sign({ user: updatedUser }, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json(token)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

const updateCat = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.user_id)
        const catIdx = user.budget.categories.findIndex(cat => cat.id === req.params.cat_id)
        if (catIdx < 0) throw new Error('Category not found')

        user.budget.total -= +user.budget.categories[catIdx].max
        user.budget.total += +req.body.max
        user.budget.categories[catIdx].name = req.body.name
        user.budget.categories[catIdx].max = req.body.max

        const updatedUser = await user.save()
        const token = jwt.sign({ user: updatedUser }, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    createCat,
    deleteCat,
    updateCat
}