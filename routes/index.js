const express = require('express');
const Question = require("../models/question");

const router = express.Router();

router.get('/', async function(req, res, next) {
  const questions = await Question.find()
  res.render('index', { questions: questions });
});

module.exports = router;
