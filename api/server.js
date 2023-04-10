const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors= require("cors");

const app = express();

require('dotenv').config();

const routes = require("./routes");
const db = require("./config/db");

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  // Si aún no tenes deployado tu front en origin va la url local.
  // Una vez que se deploye el front acá va esa url que te entrega.
  origin: "https://tmdatabase.vercel.app",
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], credentials: true,
}));
app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));

app.use("/api", routes);

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

db.sync({force:false}).then(() => {
  app.listen(process.env.port, () => {
    console.log("Escuchando en el puerto ", process.env.port);
  });
});