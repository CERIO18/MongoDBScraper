var db = require("../models");
var cheerio = require("cheerio");
var axios = require("axios");

module.exports = function(app){
  app.get("/",function(req,res){
    res.render("home")
  })
};