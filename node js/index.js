const express = require("express");
const routes = require("./routes/start");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", routes);
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// /users en GET = tout les utilisateurs
// /users en POST = créer un utilisateur
// users/:id en GET = un utilisateurs
// users/:id en PUT= modifier l'utilisateur
// users/:id en DELETE tu supprime
