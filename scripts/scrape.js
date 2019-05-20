//var request = require("request");
var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
    // Scrape the Boulder website
    return axios.get("https://www.dailycamera.com/news/").then(function(res) {
      var $ = cheerio.load(res.data);
      console.log("scraping");
      // Make an empty array to save our article info
      var articles = [];

    $("span.dfm-title").each(function(i, element){

        var head = $(this).find("h5.entry-title").text().trim();
        var url = $(this).find("a").attr("href");
        var sum = $(this).find("p").text().trim();
        
        if (head && sum && url) {
            var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();

            var dataToAdd = {
                headline: headNeat,
                summary: sumNeat,
                url: "https://www.dailycamera.com/news/" + url
            };

            articles.push(dataToAdd); 
            console.log(articles)
        }
    })
    return articles;
});
};
module.exports = scrape;
