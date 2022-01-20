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
const deleteExpense = (req, res) => {
    try {

    } catch (error) {

    }
}

module.exports = {
    createExpense,
    deleteExpense
}