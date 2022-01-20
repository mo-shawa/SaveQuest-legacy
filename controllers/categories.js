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
        console.log(error)
        res.status(400).json(error)
    }


}

const deleteCat = async (req, res) => {

    try {

        const user = await UserModel.findById(req.params.user_id)
        const catIdx = user.budget.categories.findIndex(cat => cat.id === req.params.cat_id)

        if (catIdx < 0) throw new Error('Category not found')

        let deleted = user.budget.categories.splice(catIdx, 1)
        const updatedUser = await user.save()
        console.log('DELETED: ', deleted)

        res.status(200).json(updatedUser)
        // UserModel.findById(req.params.user_id).exec(function (err, user) {
        //     let idx = user.budget.categories.findIndex(function (cat) {
        //         return cat.id === req.params.cat_id
        //     })
        //     if (idx < 0) throw new Error('Category not found')

        //     user.budget.categories.splice(idx, 1)
        //     user.save(function (err) {
        //         if (err) return console.log(err.message)
        //         console.log(user)
        //         return res.json(user)
        //     })
        // })
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error)
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