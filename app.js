const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

main()
  .then((res) => {
    console.log("Connected TO Db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wonderLust");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Root FOlder");
});

//Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// app.get("/test", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By The Farm",
//     price: 1200,
//     location: "Calangute, Goa",
//     Country: "India",
//   });
//   await sampleListing.save();
//   console.log("Sample Saved !!");
//   res.send("sucessfull");
// });

app.listen(8080, () => {
  console.log("Server Started!");
});
