var express = require("express");
var app = express();
var multer = require("multer");
var tokenauth = require("./controllers/verifyToken");
var routes = require("./routes/index.js");
var routes = require("./routes/index.js");
app.use(express.json());
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || "0.0.0.0";
app.use(express.urlencoded({ extended: true }));
var cors = require("cors");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
dotenv.config();
app.use(cors());
mongoose.connect(
  process.env.connects,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected....");
  }
);
mongoose.set("useFindAndModify", false);
app.use("/api", routes);
app.get("/", function (req, res) {
  console.log("App");
  res.send("Hello world!");
});
app.use("/api", routes);
app.listen(server_port, server_host, () => {
  console.log("App listeing on 3000");
});
