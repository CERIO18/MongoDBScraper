var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var HeadlineSchema = new Schema({
  Headline: {
    type: String,
    required: true,
    unique: true
  },
  Summary:{
    type: String,
    required: true
  },
  Url:{
    type: String,
    require: true
  },
  Saved:{
    type: Boolean,
    default: false

  }
});

var Headline = mongoose.model("Headline",HeadlineSchema);
module.exports = Headline;