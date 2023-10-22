const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    name: String
});

const Question = mongoose.model("questions", questionSchema);

module.exports = Question;
