const User = require('../models/user')
const jwt = require('jsonwebtoken')


module.exports = {
    create,
    login
  };

async function create(req,res){
    try {
        const user = await User.create({name: req.body.name, email:req.body.email, password:req.body.password,})
        const token = jwt.sign({user}, process.env.SECRET,{expiresIn: '24h'})
        res.state(200).json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}