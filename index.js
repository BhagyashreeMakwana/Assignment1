const express = require("express");
const bodyparser = require("body-parser");
const mongodb = require("mongodb");
const mongoClient = require("mongodb").MongoClient
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const fs = require("fs");


const app = express();
app.use(bodyparser.urlencoded({extended: true}))
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

const mongoClient = require("mongodb").MongoClient
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const fs = require("fs");


const app = express();
app.use(bodyparser.urlencoded({extended: true}))
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

const mongoClient = require("mongodb").MongoClient
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const fs = require("fs");


const app = express();
app.use(bodyparser.urlencoded({extended: true}))
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

const mongoClient = require("mongodb").MongoClient
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const fs = require("fs");


const app = express();
app.use(bodyparser.urlencoded({extended: true}))
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

mongoClient.connect("mongodb+srv://movieDB:mtklgali@***@cluster0-ghvz6.mongodb.net/test?retryWrites=true&w=majority", {
    useUnifiedTopology: true})
    .then(client => {
      const db = client.db("movieDB")
      const moviesCollection = db.collection("moviesCollection")

      app.get("/", (req, res) => {
        db.collection("moviesCollection").find().toArray()
        .then(results => {
          res.render("index.ejs", {summary: results})
        })
        .catch(error => console.log(error))
      });

      app.post("/upload", (req, res) => {

        name = req.body.name
        img = req.body.file
        summary = req.body.summary

        console.log(req.body);

        JSONObject = {
          "name":name,
          "img":img,
          "summary":summary
        }

        if (name === undefined || img === undefined || summary === undefined) {
          res.redirect("/", 400);
        }

        moviesCollection.insertOne(JSONObject)
        .then(result => {
          // console.log(result);
          res.redirect("/", 200);
        })
        .catch(err => console.log(err));
      });

      app.listen(3000, () => {console.log("connected on port 3000")});
  })
  .catch(err => console.log(err))
