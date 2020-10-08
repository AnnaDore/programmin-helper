const mongoose = require("mongoose");
//const Tag = require("../models/Tag");
const Snippet = require("../models/Snippet");
//const Extension = require('../models/Extension')


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    //return Tag.insertMany(tagData)
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });


