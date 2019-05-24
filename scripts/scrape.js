var request = require("request");
var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
    // Scrape the Boulder website
    console.log("scraping");
    return axios.get("https://www.dailycamera.com/news/").then(function(res) {
      var $ = cheerio.load(res.data);
      console.log("scraping");
      // Make an empty array to save our article info
      var articles = [];
      //console.log(articles)
    $("h4.entry-title").each(function(i, element){

        var head = $(this).find("a.article-title").attr("title");
        var url = $(this).find("a.article-title").attr("href");
        // var sum = $(this).find("p").text().trim();
        
        if (head && url) {
           // var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            // var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();

            var dataToAdd = {
                headline: head,
                summary: head,
                url:url
            };

            articles.push(dataToAdd); 
            console.log(articles)
        }
    })
    return articles;
});
};

scrape();
module.exports = scrape;
