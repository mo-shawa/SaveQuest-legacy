const { UserModel } = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6


module.exports = {
    create,
    login
};

async function create(req, res) {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
        const user = await UserModel.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                budget: {
                    total: 1000,
                    categories: [
                        {
                            name: 'Housing',
                            max: 500,
                            expenses: []
                        },
                        {
                            name: 'Food',
                            max: 300,
                            expenses: []
                        },
                        {
                            name: 'Entertainment',
                            max: 200,
                            expenses: []
                        }
                    ]
                },
                exp: 0,
                img: '' // how to use images in public?? or ex: should we upload to imgur and link to img?
            }
        )
        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })

        res.status(200).json(token)
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}

async function login(req, res) {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error()

        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json(token)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
}