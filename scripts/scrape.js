var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
    request("https://www.nytimes.com", function(err, res, body) {

    var $ = cheerio.load(body);

    var articles = [];

    $("div.css-1100km").each(function(i, element){

        var head = $(this).children("a.article-title").text().trim();
        var sum = $(this).children("href").text().trim();
        
        if (head && sum) {
            var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();

            var dataToAdd = {
                headline: headNeat,
                summary: sumNeat
            };

            articles.push(dataToAdd); 
            console.log(articles)
        }
    })
    cb(articles);
});
};
module.exports = scrape;
