require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var _ = require('lodash');
const cookieParser = require('cookie-parser');
const router = require('./routes/homeRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// View engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());


// Database connection
mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);


// Routes
app.get('*', authMiddleware.checkUser);
app.use(router);

app.listen(80, function() {
  console.log("Server started on port 80");
});
