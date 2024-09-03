const express = require("express");
var cors = require("cors"); // Importando cors
require("dotenv").config();
const { dbConnection } = require("./database/config");
const app = express();

app.use(express.json());
app.use(cors());

dbConnection.connect((err) => {
    if (err) throw err;
    console.log("Conexión exitosa")
})

app.use("/api/users", require("./routes/users"));

var port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})