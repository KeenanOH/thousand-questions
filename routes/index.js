const express = require('express');
const mongoose = require("mongoose");
const Question = require("../models/question");

require("dotenv").config();

const router = express.Router();

router.get('/', async function(req, res, next) {
  const questions = await Question.find()
  res.render('index', { questions: questions });
});


module.exports = router;

async function main() {
  await mongoose.connect(process.env["DATABASE_URL"]);
}

main().catch(err => console.log(err));
