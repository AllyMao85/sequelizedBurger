

// Import the model (cat.js) to use its database functions.
var db = require("../models");
;
// Create all our routes and set up logic within those routes where required.

module.exports = function(app){
// });
app.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(dbburger){
    var hbsObject = {
      burgers: dbburger
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });

});


app.post("/api/burgers", function(req, res) {
  console.log(req.body);
  db.burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(dbburger){
    res.json(dbburger);
    console.log(dbburger);
    console.log("id: "+ dbburger.insertId);
  });
 
});

app.put("/api/burgers/:id", function(req, res) {
  console.log(req.body);
  db.burgers.update(req.body,
  {
    where: {
      id: req.params.id
    }
  }).then(function(dbburger){
    res.json(dbburger);
    // if (dbburger.changedRows === 0) {
    //   // If no rows were changed, then the ID must not exist, so 404
    //   return dbburger.status(404).end();
    // };
    // dbburger.status(200).end();
  });

});


};