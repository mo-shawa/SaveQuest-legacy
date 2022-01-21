const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('connected', () => {
  console.log(`Mongoose connected to ${db.name} at ${db.host}:${db.port}`)
})

db.on("connected", () => {
  console.log(`Mongoose connected to ${db.name} at ${db.host}:${db.port}`);
});
