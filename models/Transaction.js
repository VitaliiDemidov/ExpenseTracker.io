const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Добавте текст"]
  },
  amount: {
    type: Number,
    required: [true, "Введіть прибуток або розхід"]
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
