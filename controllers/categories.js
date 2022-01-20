const { UserModel } = require('../models/user')
const { CategoryModel } = require('../models/user')
// const jwt = require('jsonwebtoken')


const createCat = async (req, res) => {
    try {
        // console.log('Req body: ', req.body)
        const user = await UserModel.findById(req.params.user_id)
        const newCat = new CategoryModel(req.body)
        // console.log(newCat)
        user.budget.categories.push(newCat)
        const updatedUser = await user.save()
        // const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
        // res.status(200).json(token)
        console.log(updatedUser)
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }


}

const deleteCat = (req, res) => {

    UserModel.findById(req.params.user_id).exec(function (err, user) {
        let idx = user.budget.categories.findIndex(function (cat) {
            return cat.id === req.params.cat_id
        })
        user.budget.categories.splice(idx, 1)
        user.save(function (err) {
            if (err) return console.log(err.message)
            console.log(user)
            return res.json(user)
        })
    })


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