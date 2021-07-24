const express = require("express");
const Post = require('../models/Post');
const router = express.Router();

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

router.get("/", (req,res) => {
    Post.find({}, function(err, posts){
      res.render("home",{homeContent:homeStartingContent, posts:posts});
    });
  });

const aboutRoutes = require("./aboutRoutes");
const composeRoutes = require('./composeRoutes');
const contactRoutes = require('./contactRoutes');
const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');

router.use(aboutRoutes);
router.use(composeRoutes);
router.use(contactRoutes);
router.use(postRoutes);
router.use(authRoutes);

module.exports = router;