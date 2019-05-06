
module.exports = function(router) {
  //this will render the home page
  router.get("/", function(req, res) {
    res.render("home");
  });

  router.get("/saved", function(req,res) {
    res.render("saved");

  });
  router.get("/scrape",function(req,res) {
    res.render("scrape");
});
}
