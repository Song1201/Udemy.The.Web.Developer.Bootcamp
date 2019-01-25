let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/yelp_camp", {useNewUrlParser: true});
let Campground = require("./models/campground");
let Comment = require("./models/comment");
let seedDB = require("./seeds");

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

seedDB();

app.get("/", function(req,res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) console.log(err);
    else res.render("campgrounds/index", {campgrounds:allCampgrounds});
  })
  
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image: image, description: description};
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) console.log(err);
    else res.redirect("/campgrounds");
  });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("campgrounds/new");
});

app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
    if (err) console.log(err);
    else res.render("campgrounds/show", {campground: foundCampground});
  });
})

app.get("/campgrounds/:id/comments/new", function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) console.log(err);
    else res.render("comments/new", {campground: campground});  
  });
});

app.post("/campgrounds/:id/comments", function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) console.log(err);
        else {
          campground.comments.push(comment);
          campground.save();
          res.redirect("/campgrounds/" + campground._id);
        }
      });
    }
  });
});

app.listen(3000, "127.0.0.1", function() {
  console.log("The YelpCamp Server Has Started!");
});