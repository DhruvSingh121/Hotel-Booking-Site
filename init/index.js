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
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68676bb87e0b6395a3efac80",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data Saved !!");
};

initDB();
