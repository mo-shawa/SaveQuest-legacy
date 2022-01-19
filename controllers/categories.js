const { UserModel } = require('../models/user')
const { CategoryModel } = require('../models/user')
const jwt = require('jsonwebtoken')


const createCat = async (req, res) => {
    try {
        // console.log('Req body: ', req.body)
        const user = await UserModel.findById(req.params.user_id)
        const newCat = new CategoryModel(req.body)
        // console.log(newCat)
        user.budget.categories.push(newCat)
        user.save()
        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json(token)
        // res.status(200).json(user)
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
            // const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
            // res.status(200).json(token)
            return res.json(user.budget.categories)
        })
    })


    // const user = await UserModel.findById(req.params.user_id)
    // console.log(user)
    // const deleted = await CategoryModel.findOneAndDelete({ _id: req.params.cat_id })
    // user.save()
    // res.status(200).json(user)

    // CategoryModel.findByIdAndDelete(req.params.cat_id).then((error, deleted) => console.log(deleted)).then(res.status(200).json('success'))
    // console.log(deleted)
    // res.status(200).json('success')


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