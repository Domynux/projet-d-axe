const express = require("express");
const routes = require("./routes/start");
const cors = require("cors");
const app = express();
const port = 3000;
const ip = require("ip");
const ipAddr = ip.address();
const bodyParser = require("body-parser");

let lastHouseVisited = "Gryffondor";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);
app.use(cors());
app.get("/", (req, res) => {
  console.log("get");
  res.json({ house: lastHouseVisited });
});
app.post("/", (req, res) => {
  lastHouseVisited = req.body.house; ///-----------------------
  res.json({ house: lastHouseVisited }); // ----------------------
});
app.listen(3000, () => {
  console.log("Server run: http://" + ipAddr + ":3000"); //--------------------
});

// /users en GET = tout les utilisateurs
// /users en POST = créer un utilisateur
// users/:id en GET = un utilisateurs
// users/:id en PUT= modifier l'utilisateur
// users/:id en DELETE tu supprime
