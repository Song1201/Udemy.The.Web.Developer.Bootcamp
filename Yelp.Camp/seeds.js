let mongoose = require("mongoose");
let Campground = require("./models/campground");
let Comment = require("./models/comment");

let data = [
  {
    name: "OKC",
    image: "/images/camping.1.jpg",
    description: "The beautiful Oklahoma City. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt libero a est placerat feugiat. In hac habitasse platea dictumst. Integer varius lectus ac quam blandit fermentum. Nam dapibus urna augue, id feugiat dolor aliquam vel. Nulla finibus elit ac velit commodo pharetra. In sit amet ornare ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus volutpat dapibus metus ut maximus. Sed erat felis, viverra id neque et, sagittis bibendum turpis. Vivamus a venenatis ex, sit amet fermentum turpis. Morbi dignissim augue at ex convallis tincidunt. Maecenas id imperdiet velit. Quisque molestie, velit ut vulputate rutrum, lectus dolor ornare leo, a varius mi elit vel risus. Nam a vestibulum tellus, eu molestie odio. Morbi id metus lacinia, eleifend sem sed, rutrum justo. Vestibulum id finibus tellus."
  },
  {
    name: "LAL",
    image: "/images/camping.2.jpg",
    description: "Kobe!!! Kobe!!! Kobe!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt libero a est placerat feugiat. In hac habitasse platea dictumst. Integer varius lectus ac quam blandit fermentum. Nam dapibus urna augue, id feugiat dolor aliquam vel. Nulla finibus elit ac velit commodo pharetra. In sit amet ornare ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus volutpat dapibus metus ut maximus. Sed erat felis, viverra id neque et, sagittis bibendum turpis. Vivamus a venenatis ex, sit amet fermentum turpis. Morbi dignissim augue at ex convallis tincidunt. Maecenas id imperdiet velit. Quisque molestie, velit ut vulputate rutrum, lectus dolor ornare leo, a varius mi elit vel risus. Nam a vestibulum tellus, eu molestie odio. Morbi id metus lacinia, eleifend sem sed, rutrum justo. Vestibulum id finibus tellus."
  },
  {
    name: "CHI",
    image: "/images/camping.3.jpg",
    description: "Michael Jordan is the GOAT!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt libero a est placerat feugiat. In hac habitasse platea dictumst. Integer varius lectus ac quam blandit fermentum. Nam dapibus urna augue, id feugiat dolor aliquam vel. Nulla finibus elit ac velit commodo pharetra. In sit amet ornare ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus volutpat dapibus metus ut maximus. Sed erat felis, viverra id neque et, sagittis bibendum turpis. Vivamus a venenatis ex, sit amet fermentum turpis. Morbi dignissim augue at ex convallis tincidunt. Maecenas id imperdiet velit. Quisque molestie, velit ut vulputate rutrum, lectus dolor ornare leo, a varius mi elit vel risus. Nam a vestibulum tellus, eu molestie odio. Morbi id metus lacinia, eleifend sem sed, rutrum justo. Vestibulum id finibus tellus."
  }
]

function seedDB() {
  Campground.remove({}, function(err) {
    if (err) console.log(err);
    else console.log("Removed All Campgrounds!");
    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
        if (err) console.log(err);
        else {
          console.log("Added a campground!");
          Comment.create({
            text: "Yet THUNDER is the best!",
            author: "Song"
          }, function(err, comment) {
            if (err) console.log(err);
            else {
              campground.comments.push(comment);
              campground.save();
              console.log("Created new comment");
            }
          });
        }
      });
    });    
  });
}

module.exports = seedDB;