var friends = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
    console.log(req.body);
  });
}
