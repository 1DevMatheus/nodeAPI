const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// DB Commection
const database = require("./src/database/connection");
database();

// ROUTES

const routes = require("./src/routes/router");
app.use("/api", routes);

app.listen(3333, () => console.log(`Server running on 3333`));
