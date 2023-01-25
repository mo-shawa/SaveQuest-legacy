const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  amount: Number,
  detail: String,
}, { timestamps: true })

const categorySchema = new Schema({
  name: String,
  max: Number,
  expenses: [expenseSchema]
})

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 8,
    required: true
  },
  budget: {
    total: Number,
    totalExp: Number,
    categories: [categorySchema]
  },
  exp: Number,
  img: String
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

const UserModel = mongoose.model('User', userSchema)
const CategoryModel = mongoose.model('Category', categorySchema)
const ExpenseModel = mongoose.model('Expense', expenseSchema)

module.exports = {
  UserModel,
  CategoryModel,
  ExpenseModel
}