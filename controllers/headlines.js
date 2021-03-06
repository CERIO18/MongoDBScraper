var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

// Bring in the Headline and Note Mongoose models
var Headline = require("../models/Headline");

module.exports = {
fetch: function(cb) {
    console.log("please work")
        scrape(function(data) {
            var articles = data;
            console.log("data: ", articles)
            for (var i=0; i < articles.length; i++) {
                articles[i].date = makeDate();
                articles[i].saved = false;
        }

            Headline.collection.insertMany(articles, {ordered:false}, function(err, docs){
                cb(err, docs);
            });
        });
    },
    
delete: function(query, cb) {
        Headline.remove(query, cb);
},
get: function(query, cb) {
        Headline.find(query)
        .sort({
            _id: -1 
        })
        .exec(function(err, doc) {
                cb(doc);     
        });
    },
    update: function(query, cb) {
            Headline.update({_id: query._id},{
                $set: query
            }, {}, cb);
    }
}

