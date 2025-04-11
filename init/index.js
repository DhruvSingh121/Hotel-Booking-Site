const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

main()
  .then((res) => {
    console.log("Connected TO Db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wonderLust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data Saved !!");
};

initDB();
