const mongoose = require('mongoose');
const Post = require('../models/Post');
const bodyParser = require("body-parser");

module.exports.compose_get = (req, res) => {
    res.render("compose");
}

module.exports.compose_post = (req, res) => {
    const post = new Post({
        title: req.body.postTitle,
        content: req.body.postContent
    });


    post.save(function (err) {
        if (!err) {
            res.redirect("/");
        }
    });
}