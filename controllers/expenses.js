const { ExpenseModel, UserModel, CategoryModel } = require('../models/user')

const createExpense = async (req, res) => {
    try {

        const user = await UserModel.findById(req.params.user_id)
        console.log(user)
        const newExp = new ExpenseModel(req.body)
        console.log(newExp)
        let category = user.budget.categories.find(cat => cat.id === req.params.cat_id)
        category.expenses.push(newExp)
        console.log(category)
        // category.save()
        await user.save()



        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
}
const deleteExpense = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.user_id)
        let category = user.budget.categories.find(cat => cat.id === req.params.cat_id)
        let expenseIdx = category.expenses.findIndex(function (exp) {
            return exp.id === req.params.exp_id
        })

        if (expenseIdx < 0) throw new Error('Expense not found')

        let deleted = category.expenses.splice(expenseIdx, 1)
        const updatedUser = await user.save()
        console.log('DELETED: ', deleted)

        res.status(200).json(updatedUser)


    } catch (error) {
        console.log(error.message)
        res.status(400).json(error)
    }
}

module.exports = {
    createExpense,
    deleteExpense
}