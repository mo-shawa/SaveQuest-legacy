const { UserModel } = require('../models/user')
const { CategoryModel } = require('../models/user')


const createCat = async (req, res) => {
    try {
        // console.log('Req body: ', req.body)
        const user = await UserModel.findById(req.params.user_id)
        const newCat = new CategoryModel(req.body)
        // console.log(newCat)
        user.budget.categories.push(newCat)
        user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }


}

const deleteCat = async (req, res) => {
    try {
        const deleted = CategoryModel.findByIdAndDelete(req.params.cat_id)
        console.log(deleted)
        res.status(200).json('success')

    } catch (error) {
        console.log(error.message)
    }
}
const updateCat = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {
    createCat,
    deleteCat,
    updateCat
}