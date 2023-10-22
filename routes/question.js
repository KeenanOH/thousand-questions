const express = require('express');
const mongoose = require("mongoose");
const Question = require("../models/question");

const router = express.Router();

router.post("/", async function(req, res) {
    const question = new Question({
        name: req.body.name
    });
    await question.save()
    await res.redirect("/")
});

router.post("/delete/:id", async function(req, res) {
    await Question.findByIdAndDelete(req.params.id);
    await res.redirect("/")
});

module.exports = router;
