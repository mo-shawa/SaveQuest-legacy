const { UserModel } = require('../models/user')
const { CategoryModel } = require('../models/user')


const createCat = async (req, res) => {
    // console.log('Req body: ', req.body)
    const user = await UserModel.findById(req.params.user_id)
    const newCat = new CategoryModel(req.body)
    // console.log(newCat)
    user.budget.categories.push(newCat)
    user.save()
    res.status(200).json(user)

}

const deleteCat = async (req, res) => {
    try {
        CategoryModel.findByIdAndDelete(req.params.cat_id)

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