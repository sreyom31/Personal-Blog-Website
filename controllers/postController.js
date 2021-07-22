const Post = require('../models/Post');
var _ = require('lodash');
const bodyParser = require("body-parser");

module.exports.post_get = (req, res) => {
    // const requestedPostId=_.lowerCase(req.params.postId);
    const post = new Post({
        title: req.body.postTitle,
        content: req.body.postContent
    });

    const requestedPostId = req.params.postId;
    Post.findOne({ _id: requestedPostId }, function (err, post) {
        res.render("post", {
            title: post.title,
            content: post.content
        });
    });
}