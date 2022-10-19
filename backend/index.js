const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const expertsRoute = require("./routes/experts");
const userRoute = require("./routes/userRoute");
const passport = require("passport");
const paymentRoute = require("./routes/paymentsRoute");
const ordersRoute = require("./routes/ordersRoute");
const app = express();
const path = require("path");
const feedRoute = require("./routes/feeds")

dotenv.config();

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(passport.initialize());
require("./middleware/passport")(passport);

// API routes
app.use("/api/experts", expertsRoute);

app.use("/api/users", userRoute);
app.use(paymentRoute);
app.use("/api/feed", feedRoute)
app.use(ordersRoute);
// app.get("/", (req, res, next) => {
//   console.log("index route ");
//   res.status(200).json({
//     status: "success",
//   });
// });

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/*',function(req, res){
  res.sendFile(path.join(__dirname, '../frontend/build','index.html'));
})

app.get("*", function (req, res) {
  console.log("404 - ");
  res.send("404");
});

const PORT = process.env.PORT || 5000;

module.exports = app;
