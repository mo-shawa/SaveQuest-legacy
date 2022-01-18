const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/savequest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Mongoose connected to ${db.name} at ${db.host}:${db.port}`)
})

